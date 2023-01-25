const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes)=> {
    const RefreshToken = Sequelize.define('RefreshToken', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true ,
            primaryKey : true,
            allowNull : false
      
          },
          token : {
            type: DataTypes.TEXT,
            allowNull : false
          },
          user_id : {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          createdAt:{
            type:DataTypes.DATE,
            field : 'created_at'
          },
          updatedAt:{
            type:DataTypes.DATE,
            field : 'updated_at'
          }
    });

    return RefreshToken;
}