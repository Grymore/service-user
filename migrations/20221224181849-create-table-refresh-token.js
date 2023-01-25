'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
   await queryInterface.createTable('refreshtokens', {



    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true ,
      primaryKey : true,
      allowNull : false

    },
    token : {
      type: Sequelize.TEXT,
      allowNull : false
    },
    user_id : {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    created_at:{
      type:Sequelize.DATE,
      allowNull : false
    },
    updated_at:{
      type:Sequelize.DATE,
      allowNull : false
    }


   });

   await queryInterface.addConstraint('refreshtokens',{
    type : 'foreign key',
    fields : ['user_id'],
    name : 'REFRESH_TOKEN_USER_ID',
    references: {
      table : 'users',
      field : 'id'
    }

  })
  
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('refreshtokens');
   
  }
};
