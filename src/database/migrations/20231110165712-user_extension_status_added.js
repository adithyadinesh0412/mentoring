'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.changeColumn('user_extensions', 'status', {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'ACTIVE',
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('user_extensions', 'status')
	},
}
