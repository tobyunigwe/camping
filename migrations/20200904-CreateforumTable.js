'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Forums', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date1: {
      	allowNull: false,
      	type: Sequelize.DATE
      },
      date2: {
      	allowNull: false,
      	type: Sequelize.DATE
      },
      pers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      options: {
        allowNull: false,
        type: Sequelize.STRING
      },
      creator: {
        allowNull: false,
        type: Sequelize.STRING
    },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Forums');
  }
};