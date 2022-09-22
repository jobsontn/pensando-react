'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const Teams = [
      { name: 'Warriors' },
      { name: 'Zcoding' },
      { name: 'Mega' },
      { name: 'Star' },
      { name: 'Imperial' },
      { name: 'YarnDev' },
    ];
    await queryInterface.bulkInsert('Teams', Teams, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
