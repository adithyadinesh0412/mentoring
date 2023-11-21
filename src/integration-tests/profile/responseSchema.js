const listSchema = {
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
					items: [
						{
							type: 'object',
							properties: {
								key: {
									type: 'string',
								},
								values: {
									type: 'array',
									items: [
										{
											type: 'object',
											properties: {
												_id: {
													type: 'string',
												},
												name: {
													type: 'string',
												},
												areasOfExpertise: {
													type: 'array',
													items: {},
												},
											},
											required: ['_id', 'name', 'areasOfExpertise'],
										},
									],
								},
							},
							required: ['key', 'values'],
						},
					],
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
				formsVersion: {
					type: 'array',
					items: {},
				},
			},
			required: ['formsVersion'],
		},
	},
	required: ['responseCode', 'message', 'result', 'meta'],
}
const pendingFeedBacksSchema = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'array',
			items: {},
		},
		meta: {
			type: 'object',
			properties: {
				formsVersion: {
					type: 'array',
					items: {},
				},
			},
			required: ['formsVersion'],
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
				status: {
					type: 'string',
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
				external_session_visibility: {
					type: 'string',
				},
				external_mentor_visibility: {
					type: 'string',
				},
				user_id: {
					type: 'integer',
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
				'status',
				'designation',
				'area_of_expertise',
				'education_qualification',
				'tags',
				'visibility',
				'external_session_visibility',
				'external_mentor_visibility',
				'user_id',
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
const deactivateUser = {
	type: 'object',
	properties: {
		responseCode: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		result: {
			type: 'array',
			items: {},
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
	listSchema,
	pendingFeedBacksSchema,
	createUser,
	deactivateUser,
}
