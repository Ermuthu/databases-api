'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Databases',
      'resourceName',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Unnamed database"
      }
    );

    queryInterface.removeColumn('Databases', 'title');

    queryInterface.addColumn(
      'Databases',
      'resourceType',
      {
        type: Sequelize.STRING,
      }
    );
    
    queryInterface.addColumn(
      'Databases',
      'resourceAdvisory',
      {
        type: Sequelize.STRING,
      }
    );

    queryInterface.removeColumn('Databases', 'advisory');
    
    queryInterface.addColumn(
      'Databases',
      'resourceAdvisoryText',
      {
        type: Sequelize.TEXT,
      }
    );
    
    queryInterface.addColumn(
      'Databases',
      'shortDescription',
      {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    );

    queryInterface.addColumn(
      'Databases',
      'longDescription',
      {
        type: Sequelize.TEXT,
      }
    );

    queryInterface.removeColumn('Databases', 'body');

    queryInterface.addColumn(
      'Databases',
      'coverageDates',
      {
        type: Sequelize.STRING,
      }
    );

    queryInterface.addColumn(
      'Databases',
      'access',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );

    queryInterface.addColumn(
      'Databases',
      'vendor',
      {
        type: Sequelize.STRING,
      }
    );    

  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Databases', 'resourceName');

    queryInterface.addColumn(
      'Databases',
      'title',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Unnamed database"
      }
    )

    queryInterface.removeColumn('Databases', 'resourceType');
    queryInterface.removeColumn('Databases', 'resourceAdvisory');

    queryInterface.addColumn(
      'Databases',
      'advisory',
      {
        type: Sequelize.TEXT,
      }
    )

    queryInterface.removeColumn('Databases', 'resourceAdvisoryText');
    queryInterface.removeColumn('Databases', 'shortDescription');
    queryInterface.removeColumn('Databases', 'longDescription');

    queryInterface.addColumn(
      'Databases',
      'body',
      {
        type: Sequelize.TEXT,
      }
    )

    queryInterface.removeColumn('Databases', 'coverageDates');
    queryInterface.removeColumn('Databases', 'access');
    queryInterface.removeColumn('Databases', 'vendor');
  }
};
