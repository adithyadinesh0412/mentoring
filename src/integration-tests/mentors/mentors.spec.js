/**
 * name : entity.spec.js
 * author : Nevil
 * created-date : 14-Oct-2022
 * Description : Integration test for entity controllers.
 */

const commonHelper = require('@commonTests')
const schema = require('./responseSchema')
const timeOutValue = 50000

describe('mentoring/v1/mentors ', function () {
	let userDetails
	beforeAll(async () => {
		userDetails = await commonHelper.mentorLogIn()
	}, timeOutValue)

	it('/profile/create', async () => {
		let res = await request.post('/mentoring/v1/profile/create').send({
			designation: ['beo', 'deo', 'testt'],
			area_of_expertise: ['educational_leadership', 'sqaa'],
			education_qualification: 'MBA',
			tags: ['Experienced', 'Technical'],
			visibility: 'visible',
			organisation_ids: [1],
		})
		console.log('create :  : : => ', res.body)
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.createUser)
	})
	it('/reports', async () => {
		let res = await request.get('/mentoring/v1/mentors/reports').query({ filterType: 'QUARTERLY' })
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.reportsSchema)
	})
	it('/profile', async () => {
		let res = await request.get('/mentoring/v1/mentors/profile/' + userDetails.userId)
		console.log(res.body)
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.profileSchema)
	})
	it('/upcomingSessions', async () => {
		let res = await request.get('/mentoring/v1/mentors/upcomingSessions/' + userDetails.userId)
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.upcomingSessionsSchema)
	})
	it('/share', async () => {
		let res = await request.get('/mentoring/v1/mentors/share/' + userDetails.userId)
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.shareSchema)
	})
})
