'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', { // make sure to make it SINGAL and NOT leads BUT lead
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      userId: {
      	allowNull: false,
      	type: DataTypes.INTEGER
      },
      forumId: {
      	allowNull: false,
      	type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
        },
      content: {
        allowNull: false,
        type: DataTypes.TEXT
    },
  });

  return Comment;
};
// review model for camping users