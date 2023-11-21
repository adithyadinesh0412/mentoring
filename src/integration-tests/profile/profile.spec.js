/**
 * name : entity.spec.js
 * author : Nevil
 * created-date : 14-Oct-2022
 * Description : Integration test for entity controllers.
 */

const commonHelper = require('@commonTests')
const schema = require('./responseSchema')
const timeOutValue = 50000

describe('mentoring/v1/profile', function () {
	beforeAll(async () => {
		let resp = await commonHelper.logIn()
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
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.createUser)
	})
	it('/profile/deactivate', async () => {
		let res = await request.post('/mentoring/v1/profile/deactivate')
		expect(res.statusCode).toBe(200)
		expect(res.body).toMatchSchema(schema.deactivateUser)
	})
})
