'use strict';
module.exports = (sequelize, DataTypes) => {
  var Database = sequelize.define('Database', {
    resourceName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Unnamed database"
    },
    resourceType: DataTypes.STRING,
    resourceAdvisory: DataTypes.STRING,
    resourceAdvisoryText: DataTypes.TEXT,
    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    longDescription: DataTypes.TEXT,
    coverageDates: DataTypes.STRING,
    access: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vendor: DataTypes.STRING,
    link: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Database;
};