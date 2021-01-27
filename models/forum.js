'use strict';
module.exports = (sequelize, DataTypes) => {
  var Forum = sequelize.define('Forum', { // make sure to make it SINGAL and NOT leads BUT lead
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    date1: {
      allowNull: false,
      type: DataTypes.DATE
    },
    date2: {
      allowNull: false,
      type: DataTypes.DATE
    },
    pers: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    options: {
      allowNull: false,
      type: DataTypes.STRING
    },
    creator: {
      allowNull: false,
      type: DataTypes.STRING
  },
  });

  return Forum;
};