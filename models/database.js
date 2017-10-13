'use strict';
module.exports = (sequelize, DataTypes) => {
  var Database = sequelize.define('Database', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    link: DataTypes.STRING,
    advisory: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Database;
};