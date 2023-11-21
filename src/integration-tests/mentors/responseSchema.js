const reportsSchema = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'object',
			properties: {
				total_session_created: {
					type: 'integer',
				},
				total_session_hosted: {
					type: 'integer',
				},
			},
			required: ['total_session_created', 'total_session_hosted'],
		},
		meta: {
			type: 'object',
			properties: {
				correlation: {
					type: 'string',
				},
				meetingPlatform: {
					type: 'string',
				},
			},
			required: ['correlation', 'meetingPlatform'],
		},
	},
	required: ['responseCode', 'message', 'result', 'meta'],
}
const profileSchema = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'object',
			properties: {
				sessions_attended: {
					type: 'integer',
				},
				sessions_hosted: {
					type: 'integer',
				},
				id: {
					type: 'integer',
				},
				email: {
					type: 'string',
				},
				email_verified: {
					type: 'string',
				},
				name: {
					type: 'string',
				},
				gender: {
					type: 'null',
				},
				location: {
					type: 'null',
				},
				about: {
					type: 'null',
				},
				share_link: {
					type: 'null',
				},
				status: {
					type: 'string',
				},
				status_updated_at: {
					type: 'null',
				},
				image: {
					type: 'null',
				},
				last_logged_in_at: {
					type: 'string',
				},
				has_accepted_terms_and_conditions: {
					type: 'boolean',
				},
				languages: {
					type: 'null',
				},
				preferred_language: {
					type: 'string',
				},
				organization_id: {
					type: 'integer',
				},
				roles: {
					type: 'array',
					items: [
						{
							type: 'integer',
						},
					],
				},
				meta: {
					type: 'null',
				},
				deleted_at: {
					type: 'null',
				},
				user_roles: {
					type: 'array',
					items: [
						{
							type: 'object',
							properties: {
								id: {
									type: 'integer',
								},
								title: {
									type: 'string',
								},
								user_type: {
									type: 'integer',
								},
								status: {
									type: 'string',
								},
							},
							required: ['id', 'title', 'user_type', 'status'],
						},
					],
				},
				designation: {
					type: 'array',
					items: [
						{
							type: 'string',
						},
						{
							type: 'string',
						},
						{
							type: 'string',
						},
					],
				},
				area_of_expertise: {
					type: 'array',
					items: [
						{
							type: 'string',
						},
						{
							type: 'string',
						},
					],
				},
				education_qualification: {
					type: 'string',
				},
				rating: {
					type: 'null',
				},
				stats: {
					type: 'null',
				},
				tags: {
					type: 'array',
					items: [
						{
							type: 'string',
						},
						{
							type: 'string',
						},
					],
				},
				configs: {
					type: 'null',
				},
				visibility: {
					type: 'string',
				},
				external_session_visibility: {
					type: 'string',
				},
				external_mentor_visibility: {
					type: 'string',
				},
				experience: {
					type: 'null',
				},
				org_id: {
					type: 'integer',
				},
				created_at: {
					type: 'string',
				},
				updated_at: {
					type: 'string',
				},
			},
			required: [
				'sessions_attended',
				'sessions_hosted',
				'id',
				'email',
				'email_verified',
				'name',
				'gender',
				'location',
				'about',
				'share_link',
				'status',
				'status_updated_at',
				'image',
				'last_logged_in_at',
				'has_accepted_terms_and_conditions',
				'languages',
				'preferred_language',
				'organization_id',
				'roles',
				'meta',
				'deleted_at',
				'user_roles',
				'designation',
				'area_of_expertise',
				'education_qualification',
				'rating',
				'stats',
				'tags',
				'configs',
				'visibility',
				'external_session_visibility',
				'external_mentor_visibility',
				'experience',
				'org_id',
				'created_at',
				'updated_at',
			],
		},
		meta: {
			type: 'object',
			properties: {
				correlation: {
					type: 'string',
				},
				meetingPlatform: {
					type: 'string',
				},
			},
			required: ['correlation', 'meetingPlatform'],
		},
	},
	required: ['responseCode', 'message', 'result', 'meta'],
}
const upcomingSessionsSchema = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'object',
			properties: {
				data: {
					type: 'array',
					items: {},
				},
				count: {
					type: 'integer',
				},
			},
			required: ['data', 'count'],
		},
		meta: {
			type: 'object',
			properties: {
				correlation: {
					type: 'string',
				},
				meetingPlatform: {
					type: 'string',
				},
			},
			required: ['correlation', 'meetingPlatform'],
		},
	},
	required: ['responseCode', 'message', 'result', 'meta'],
}
const shareSchema = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'object',
			properties: {
				shareLink: {
					type: 'string',
				},
			},
			required: ['shareLink'],
		},
		meta: {
			type: 'object',
			properties: {
				correlation: {
					type: 'string',
				},
				meetingPlatform: {
					type: 'string',
				},
			},
			required: ['correlation', 'meetingPlatform'],
		},
	},
	required: ['responseCode', 'message', 'result', 'meta'],
}
const createUser = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'object',
			properties: {
				designation: {
					type: 'array',
					items: [
						{
							type: 'string',
						},
						{
							type: 'string',
						},
						{
							type: 'string',
						},
					],
				},
				area_of_expertise: {
					type: 'array',
					items: [
						{
							type: 'string',
						},
						{
							type: 'string',
						},
					],
				},
				education_qualification: {
					type: 'string',
				},
				tags: {
					type: 'array',
					items: [
						{
							type: 'string',
						},
						{
							type: 'string',
						},
					],
				},
				visibility: {
					type: 'string',
				},
				user_id: {
					type: 'integer',
				},
				external_session_visibility: {
					type: 'string',
				},
				external_mentor_visibility: {
					type: 'string',
				},
				org_id: {
					type: 'integer',
				},
				visible_to_organizations: {
					type: 'null',
				},
				updated_at: {
					type: 'string',
				},
				created_at: {
					type: 'string',
				},
				rating: {
					type: 'null',
				},
				meta: {
					type: 'null',
				},
				stats: {
					type: 'null',
				},
				configs: {
					type: 'null',
				},
				experience: {
					type: 'null',
				},
				deleted_at: {
					type: 'null',
				},
			},
			required: [
				'designation',
				'area_of_expertise',
				'education_qualification',
				'tags',
				'visibility',
				'user_id',
				'external_session_visibility',
				'external_mentor_visibility',
				'org_id',
				'visible_to_organizations',
				'updated_at',
				'created_at',
				'rating',
				'meta',
				'stats',
				'configs',
				'experience',
				'deleted_at',
			],
		},
		meta: {
			type: 'object',
			properties: {
				correlation: {
					type: 'string',
				},
				meetingPlatform: {
					type: 'string',
				},
			},
			required: ['correlation', 'meetingPlatform'],
		},
	},
	required: ['responseCode', 'message', 'result', 'meta'],
}
module.exports = {
	reportsSchema,
	profileSchema,
	upcomingSessionsSchema,
	shareSchema,
	createUser,
}
