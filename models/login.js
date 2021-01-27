'use strict';
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', { // make sure to make it SINGAL and NOT leads BUT lead
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      name: {
      	allowNull: false,
      	type: DataTypes.STRING
      },
      email: {
      	allowNull: false,
      	type: DataTypes.STRING
      },
    zip: {
      allowNull: true,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
      password: {
        allowNull: false,
        type: DataTypes.STRING
    },
  });

  return Login;
};