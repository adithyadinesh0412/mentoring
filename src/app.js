/**
 * name : app.js
 * author : Aman Kumar Gupta
 * Date : 29-Sep-2021
 * Description : Start file of a mentoring service
 */
require('module-alias/register')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config({ path: './.env' })
const path = require('path')
const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
const middleware = require('i18next-http-middleware')
let environmentData = require('./envVariables')()
const { elevateLog, correlationIdMiddleware } = require('elevate-logger')
elevateLog.config(process.env.ERROR_LOG_LEVEL, 'mentoring', process.env.DISABLE_LOG)
const logger = elevateLog.init()
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
if (!environmentData.success) {
	logger.error('Server could not start . Not all environment variable is provided', {
		triggerNotification: true,
	})
	process.exit()
}

require('@configs')

i18next
	.use(Backend)
	.use(middleware.LanguageDetector)
	.init({
		fallbackLng: 'en',
		lng: 'en',
		ns: ['translation'],
		defaultNS: 'translation',
		backend: {
			loadPath: './locales/{{lng}}.json',
		},
		detection: {
			lookupHeader: 'accept-language',
		},
	})

const app = express()

// Use helmet middleware to set security-related HTTP headers
app.use(helmet())

// Rate limiting configuration
const limiter = rateLimit({
	windowMs: process.env.RATELIMITERTIMEFRAME,
	max: process.env.NUMBEROFHITS,
	message: 'Too many requests from this IP, please try again later.',
})

// Use cookie parser middleware to parse cookies
app.use(cookieParser())

// Initialize csurf middleware
const csrfProtection = csrf({ cookie: true })

// Apply csrfProtection middleware to all routes
app.use(csrfProtection)

// Handle CSRF errors
app.use((err, req, res, next) => {
	if (err.code !== 'EBADCSRFTOKEN') return next(err)

	// Handle CSRF token errors here
	res.status(403).send('CSRF token invalid')
})

// Health check
require('@health-checks')(app)

app.use(cors())
app.use(middleware.handle(i18next))
app.use(correlationIdMiddleware)

app.use(bodyParser.urlencoded({ extended: true, limit: '50MB' }))
app.use(bodyParser.json({ limit: '50MB' }))

app.use(express.static('public'))

// Apply the rate limiter to all requests to the specified endpoint
app.use(process.env.API_DOC_URL, limiter)

app.get(process.env.API_DOC_URL, function (req, res) {
	res.sendFile(path.join(__dirname, './api-doc/index.html'))
})

app.all('*', (req, res, next) => {
	logger.info('***Mentoring Service Request Log***', {
		request: {
			requestType: `Request Type ${req.method} for ${req.url} on ${new Date()} from ${req.headers['user-agent']}`,
			requestHeaders: req.headers,
			requestBody: req.body,
			requestFiles: req.files,
		},
	})
	next()
})

/* Registered routes here */
require('./routes')(app)

// Server listens to given port
app.listen(process.env.APPLICATION_PORT, (res, err) => {
	if (err) {
		onError(err)
	}
	logger.info('Environment: ' + process.env.APPLICATION_ENV)
	logger.info('Application is running on the port:' + process.env.APPLICATION_PORT)
})

// Handles specific listen errors with friendly messages
function onError(error) {
	if (error.code === 'EACCES') {
		logger.error(process.env.APPLICATION_PORT + ' requires elevated privileges', {
			triggerNotification: true,
		})
		process.exit(1)
	} else if (error.code === 'EADDRINUSE') {
		logger.error(process.env.APPLICATION_PORT + ' is already in use', {
			triggerNotification: true,
		})
		process.exit(1)
	} else {
		throw error
	}
}
