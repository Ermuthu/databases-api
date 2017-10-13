'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Databases',
      'title',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Unnamed database"
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      'Databases',
      'title',
      {
        type: Sequelize.STRING
      }
    )
  }
};
