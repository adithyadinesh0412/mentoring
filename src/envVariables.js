let table = require('cli-table')
const common = require('@constants/common')

let tableData = new table()

let enviromentVariables = {
	APPLICATION_PORT: {
		message: 'Required port no',
		optional: true,
		default: '3000',
	},
	APPLICATION_HOST: {
		message: 'Required host',
		optional: false,
	},
	APPLICATION_ENV: {
		message: 'Required node environment',
		optional: false,
	},
	APPLICATION_BASE_URL: {
		message: 'Required application base url',
		optional: true,
		default: '/mentoring/',
	},
	ACCESS_TOKEN_SECRET: {
		message: 'Required access token secret',
		optional: false,
	},
	AUTH_TOKEN_HEADER_NAME: {
		message: 'Required auth token header name',
		optional: true,
		default: 'x-auth-token',
	},
	ADMIN_TOKEN_HEADER_NAME: {
		message: 'Required admin token header name',
		optional: true,
		default: 'admin-auth-token',
	},
	ADMIN_ACCESS_TOKEN: {
		message: 'Required admin access token',
		optional: true,
		default: false,
	},
	ORG_ID_HEADER_NAME: {
		message: 'Required organization id header name',
		optional: true,
		default: 'organization-id',
	},
	IS_AUTH_TOKEN_BEARER: {
		message: 'Required specification: If auth token is bearer or not',
		optional: true,
		default: true,
	},
	KAFKA_URL: {
		message: 'Required kafka connectivity url',
		optional: false,
	},
	KAFKA_GROUP_ID: {
		message: 'Required kafka group id',
		optional: true,
		default: 'mentoring',
	},
	NOTIFICATION_KAFKA_TOPIC: {
		message: 'Required kafka topic',
		optional: true,
		default: 'notificationtopic',
	},
	KAFKA_TOPIC: {
		message: 'Required kafka topic',
		optional: true,
		default: 'mentoring.topic',
	},
	RATING_KAFKA_TOPIC: {
		message: 'Required kafka topic',
		optional: true,
		default: 'mentoring.rating',
	},
	KAFKA_MENTORING_TOPIC: {
		message: 'Required kafka topic',
		optional: true,
		default: 'mentoringtopics',
	},
	USER_SERVICE_HOST: {
		message: 'Required user service host',
		optional: false,
	},
	USER_SERVICE_BASE_URL: {
		message: 'Required user service base url',
		optional: true,
		default: '/user/',
	},
	BIG_BLUE_BUTTON_URL: {
		message: 'Required big blue button url',
		optional: process.env.DEFAULT_MEETING_SERVICE === 'BBB' ? false : true,
	},
	MEETING_END_CALLBACK_EVENTS: {
		message: 'Required meeting end callback events',
		optional: false,
	},
	BIG_BLUE_BUTTON_SECRET_KEY: {
		message: 'Required big blue button secret key',
		optional: process.env.DEFAULT_MEETING_SERVICE === 'BBB' ? false : true,
	},
	RECORDING_READY_CALLBACK_URL: {
		message: 'Required recording ready callback url',
		optional: true,
	},
	ENABLE_LOG: {
		message: 'log enable or disable',
		optional: true,
	},
	API_DOC_URL: {
		message: 'Required api doc url',
		optional: true,
		default: '/mentoring/api-doc',
	},
	INTERNAL_CACHE_EXP_TIME: {
		message: 'Internal Cache Expiry Time',
		optional: true,
		default: 86400,
	},
	REDIS_HOST: {
		message: 'Redis Host Url',
		optional: false,
	},
	ENABLE_EMAIL_FOR_REPORT_ISSUE: {
		message: 'Required true or false',
		optional: true,
		default: true,
	},
	SUPPORT_EMAIL_ID: {
		message: 'Required email id of support',
		optional: process.env.ENABLE_EMAIL_FOR_REPORT_ISSUE === 'true' ? false : true,
	},
	REPORT_ISSUE_EMAIL_TEMPLATE_CODE: {
		message: 'Required reported issue email template code',
		optional: process.env.ENABLE_EMAIL_FOR_REPORT_ISSUE === 'true' ? false : true,
		default: 'user_issue_reported',
	},
	BIG_BLUE_BUTTON_BASE_URL: {
		message: 'Big blue button base url',
		optional: true,
		default: '/bigbluebutton/',
	},
	BIG_BLUE_BUTTON_SESSION_END_URL: {
		message: 'Big blue button session end url.',
		optional: process.env.DEFAULT_MEETING_SERVICE === 'BBB' ? false : true,
	},
	ERROR_LOG_LEVEL: {
		message: 'Required Error log level',
		optional: true,
		default: 'silly',
	},
	DISABLE_LOG: {
		message: 'Required disable log level',
		optional: true,
		default: true,
	},
	DEFAULT_MEETING_SERVICE: {
		message: 'Required default meeting service',
		optional: true,
		default: 'OFF',
	},
	SESSION_EDIT_WINDOW_MINUTES: {
		message: 'Required session edit window timeout',
		optional: true,
		default: 0,
	},
	SESSION_MENTEE_LIMIT: {
		message: 'Required session mentee limit',
		optional: true,
		default: 20,
	},
	SCHEDULER_SERVICE_HOST: {
		message: 'Required scheduler service host',
		optional: false,
	},
	SCHEDULER_SERVICE_BASE_URL: {
		message: 'Required scheduler service base url',
		optional: true,
		default: '/scheduler/',
	},
	DEFAULT_ORGANISATION_CODE: {
		message: 'Required default organisation code',
		optional: true,
		default: 'default_code',
	},
	REFRESH_VIEW_INTERVAL: {
		message: 'Interval to refresh views in milliseconds',
		optional: true,
		default: 30000,
	},
	DEFAULT_ORG_ID: {
		message: 'Default organization ID',
		optional: false,
	},
	MENTEE_SESSION_CANCELLATION_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentee session cancellation',
		optional: true,
		default: 'mentee_session_cancel',
	},
	MENTEE_SESSION_ENROLLMENT_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentee session enrollment',
		optional: true,
		default: 'mentee_session_enrollment',
	},
	MENTOR_SESSION_DELETE_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentor session delete',
		optional: true,
		default: 'mentor_session_delete',
	},
	MENTEE_SESSION_EDITED_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentee session edited by manager',
		optional: true,
		default: 'mentee_session_edited_by_manager_email_template',
	},
	MENTEE_SESSION_ENROLLMENT_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentee session enrollment by manager',
		optional: true,
		default: 'mentee_session_enrollment_by_manager',
	},
	MENTOR_PRIVATE_SESSION_INVITE_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentor private session invite by manager',
		optional: true,
		default: 'mentor_invite_private_session_by_manager',
	},
	MENTOR_PUBLIC_SESSION_INVITE_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentor public session invite by manager',
		optional: true,
		default: 'mentor_invite_public_session_by_manager',
	},
	MENTOR_SESSION_EDITED_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentor session edited by manager',
		optional: true,
		default: 'mentor_session_edited_by_manager_email_template',
	},
	MENTOR_SESSION_RESCHEDULE_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentor session reschedule',
		optional: true,
		default: 'mentor_session_reschedule',
	},
	MENTOR_SESSION_DELETE_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for mentor session deleted by manager',
		optional: true,
		default: 'session_deleted_by_manager',
	},
	SESSION_TITLE_EDITED_BY_MANAGER_EMAIL_TEMPLATE: {
		message: 'Required email template name for session title edited by manager',
		optional: true,
		default: 'session_title_edited_by_manager_email_template',
	},
	ALLOWED_HOST: {
		message: 'Required CORS allowed host',
		optional: true,
		default: '*',
	},
	DOWNLOAD_URL_EXPIRATION_DURATION: {
		message: 'Required downloadable url expiration time',
		optional: true,
		default: 300000,
	},
	SESSION_UPLOAD_EMAIL_TEMPLATE_CODE: {
		message: 'Required email template name for bulk session upload by session manager',
		optional: true,
		default: 'bulk_upload_session',
	},
	DEFAULT_QUEUE: {
		message: 'Required default queue',
		optional: true,
		default: 'mentoring-queue',
	},
	SAMPLE_CSV_FILE_PATH: {
		message: 'Required sample csv file path',
		optional: true,
		default: 'sample/bulk_session_creation.csv',
	},
	AUTH_METHOD: {
		message: 'Required authentication method',
		optional: true,
		default: common.AUTH_METHOD.NATIVE,
	},
	CSV_MAX_ROW: {
		message: 'Required Csv length',
		optional: true,
		default: 20,
	},
	SESSION_CREATION_MENTOR_LIMIT: {
		message: 'Required mentor limit for session creation',
		optional: true,
		default: 1,
	},
	MINIMUM_DURATION_FOR_AVAILABILITY: {
		message: 'Required minimum duration for availability',
		optional: true,
		default: 30,
	},
	MULTIPLE_BOOKING: {
		message: 'Required value for multiple booking',
		optional: true,
		default: true,
	},
	SIGNED_URL_EXPIRY_DURATION: {
		message: 'Required signed url expiration time in seconds',
		optional: true,
		default: 900,
	},
	SIGNED_URL_EXPIRY_IN_MILLISECONDS: {
		message: 'Required signed url expiration time in milliseconds',
		optional: true,
		default: 120000,
	},
	CLOUD_STORAGE_PROVIDER: {
		message: 'Require cloud storage provider, in azure,aws, gcloud,oci and s3',
		optional: false,
	},
	CLOUD_STORAGE_SECRET: {
		message: 'Require client storage provider identity',
		optional: false,
	},
	CLOUD_STORAGE_BUCKETNAME: {
		message: 'Require client storage bucket name',
		optional: false,
	},
	CLOUD_STORAGE_BUCKET_TYPE: {
		message: 'Require storage bucket type',
		optional: false,
	},
	PUBLIC_ASSET_BUCKETNAME: {
		message: 'Require asset storage bucket name',
		optional: false,
	},
	CLOUD_STORAGE_REGION: {
		message: 'Require storage region',
		optional: true,
	},
	CLOUD_ENDPOINT: {
		message: 'Require asset storage endpoint',
		optional: true,
	},
	CLOUD_STORAGE_ACCOUNTNAME: {
		message: 'Require account name',
		optional: false,
	},
	EMAIL_ID_ENCRYPTION_KEY: {
		message: 'Required Email ID Encryption Key',
		optional: false,
	},
	EMAIL_ID_ENCRYPTION_IV: {
		message: 'Required Email ID Encryption IV',
		optional: false,
	},
	EMAIL_ID_ENCRYPTION_ALGORITHM: {
		message: 'Required Email ID Encryption Algorithm',
		optional: true,
		default: 'aes-256-cbc',
	},
	KEYCLOAK_PUBLIC_KEY_PATH: {
		message: 'Required Keycloak Public Key Path',
		optional: true,
		default: './constants/keycloakPublicKeys',
	},
	SESSION_VERIFICATION_METHOD: {
		message: 'Required Session Verification Method',
		optional: true,
		default: 'user_service_authenticated',
	},
	SEESION_MANAGER_AND_MENTEE_LIMIT: {
		message: 'Required Mentees Limit for Session',
		optional: true,
		default: '21',
	},
	DEFAULT_SESSION_VISIBILITY_POLICY: {
		message: 'Required Default Session Visibility Policy',
		optional: true,
		default: 'CURRENT',
	},
	DEFAULT_MENTOR_VISIBILITY_POLICY: {
		message: 'Required Default Mentor Visibility Policy',
		optional: true,
		default: 'CURRENT',
	},
	DEFAULT_MENTEE_VISIBILITY_POLICY: {
		message: 'Required Default Mentee Visibility Policy',
		optional: true,
		default: 'CURRENT',
	},
	DEFAULT_EXTERNAL_SESSION_VISIBILITY_POLICY: {
		message: 'Required Default External Session Visibility Policy',
		optional: true,
		default: 'CURRENT',
	},
	DEFAULT_EXTERNAL_MENTOR_VISIBILITY_POLICY: {
		message: 'Required Default External Mentor Visibility Policy',
		optional: true,
		default: 'CURRENT',
	},
	DEFAULT_EXTERNAL_MENTEE_VISIBILITY_POLICY: {
		message: 'Required Default External Mentee Visibility Policy',
		optional: true,
		default: 'CURRENT',
	},
	CLEAR_INTERNAL_CACHE: {
		message: 'Required Default Internal Cache',
		optional: true,
		default: 'internalmentoring',
	},
	DB_POOL_MAX_CONNECTIONS: {
		message: 'Required DB Pool Max number of connections',
		optional: true,
		default: 15,
	},
	DB_POOL_IDLE_TIMEOUT: {
		message: 'Required DB Pool Idle timeout in milliseconds',
		optional: true,
		default: 10000,
	},
	DB_POOL_ACQUIRE_TIMEOUT: {
		message: 'Required DB Pool Acquire timeout in milliseconds',
		optional: true,
		default: 30000,
	},
	USER_EXTENSION_REFRESH_VIEW_INTERVAL: {
		message: 'Required User extension refresh view internal in milliseconds',
		optional: true,
		default: 30000,
	},
	SESSION_REFRESH_VIEW_INTERVAL: {
		message: 'Required Session refresh view internal in milliseconds',
		optional: true,
		default: 30000,
	},
}

let success = true

module.exports = function () {
	Object.keys(enviromentVariables).forEach((eachEnvironmentVariable) => {
		let tableObj = {
			[eachEnvironmentVariable]: 'PASSED',
		}

		let keyCheckPass = true

		if (
			enviromentVariables[eachEnvironmentVariable].optional === true &&
			enviromentVariables[eachEnvironmentVariable].requiredIf &&
			enviromentVariables[eachEnvironmentVariable].requiredIf.key &&
			enviromentVariables[eachEnvironmentVariable].requiredIf.key != '' &&
			enviromentVariables[eachEnvironmentVariable].requiredIf.operator &&
			validRequiredIfOperators.includes(enviromentVariables[eachEnvironmentVariable].requiredIf.operator) &&
			enviromentVariables[eachEnvironmentVariable].requiredIf.value &&
			enviromentVariables[eachEnvironmentVariable].requiredIf.value != ''
		) {
			switch (enviromentVariables[eachEnvironmentVariable].requiredIf.operator) {
				case 'EQUALS':
					if (
						process.env[enviromentVariables[eachEnvironmentVariable].requiredIf.key] ===
						enviromentVariables[eachEnvironmentVariable].requiredIf.value
					) {
						enviromentVariables[eachEnvironmentVariable].optional = false
					}
					break
				case 'NOT_EQUALS':
					if (
						process.env[enviromentVariables[eachEnvironmentVariable].requiredIf.key] !=
						enviromentVariables[eachEnvironmentVariable].requiredIf.value
					) {
						enviromentVariables[eachEnvironmentVariable].optional = false
					}
					break
				default:
					break
			}
		}

		if (enviromentVariables[eachEnvironmentVariable].optional === false) {
			if (!process.env[eachEnvironmentVariable] || process.env[eachEnvironmentVariable] == '') {
				success = false
				keyCheckPass = false
			} else if (
				enviromentVariables[eachEnvironmentVariable].possibleValues &&
				Array.isArray(enviromentVariables[eachEnvironmentVariable].possibleValues) &&
				enviromentVariables[eachEnvironmentVariable].possibleValues.length > 0
			) {
				if (
					!enviromentVariables[eachEnvironmentVariable].possibleValues.includes(
						process.env[eachEnvironmentVariable]
					)
				) {
					success = false
					keyCheckPass = false
					enviromentVariables[eachEnvironmentVariable].message += ` Valid values - ${enviromentVariables[
						eachEnvironmentVariable
					].possibleValues.join(', ')}`
				}
			}
		}

		if (
			(!process.env[eachEnvironmentVariable] || process.env[eachEnvironmentVariable] == '') &&
			enviromentVariables[eachEnvironmentVariable].default &&
			enviromentVariables[eachEnvironmentVariable].default != ''
		) {
			process.env[eachEnvironmentVariable] = enviromentVariables[eachEnvironmentVariable].default
		}

		if (!keyCheckPass) {
			if (enviromentVariables[eachEnvironmentVariable].message !== '') {
				tableObj[eachEnvironmentVariable] = enviromentVariables[eachEnvironmentVariable].message
			} else {
				tableObj[eachEnvironmentVariable] = `FAILED - ${eachEnvironmentVariable} is required`
			}
		}

		tableData.push(tableObj)
	})

	console.log(tableData.toString())

	return {
		success: success,
	}
}
