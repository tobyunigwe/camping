'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define('Lead', { // make sure to make it SINGAL and NOT leads BUT lead
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Lead;
};