'use strict'
const userRequests = require('@requests/user')
exports.getDefaultOrgId = async () => {
	try {
		let defaultOrgDetails = await userRequests.fetchOrgDetails({
			organizationId: process.env.DEFAULT_ORG_ID,
		})
		if (defaultOrgDetails.success && defaultOrgDetails.data && defaultOrgDetails.data.result)
			return defaultOrgDetails.data.result.id
		else return null
	} catch (err) {
		console.log(err)
	}
}
