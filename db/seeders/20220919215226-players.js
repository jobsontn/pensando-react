const fs = require('fs');
const path = require('path');
const filename = path.join(process.cwd(), 'db/seeders/students01.json');
const students = JSON.parse(fs.readFileSync(filename));

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
    const players = students.map((s) => {
      return {
        nick: s.email.split('@')[0],
        name: s.nome,
        email: s.email,
      }
    });
    await queryInterface.bulkInsert('Players', players, {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Players', null, {});
  }
};
