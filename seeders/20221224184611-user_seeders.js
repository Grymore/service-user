'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  
      await queryInterface.bulkInsert('users', [

        {
          name: 'faisal',
          profession: 'Admin Micro',
          role: 'admin',
          email: 'faisal@das.com',
          password: await bcrypt.hash('admin', 10),
          created_at: new Date(+7),
          updated_at: new Date(+7)
        },

        {
          name: 'Akbar',
          profession: 'Programmer',
          role: 'student',
          email: 'akbar@das.com',
          password: await bcrypt.hash('admin', 10),
          created_at: new Date(+7),
          updated_at: new Date(+7)
        }
      
      ]);
  },

  down: async  (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});
 
  }
};
