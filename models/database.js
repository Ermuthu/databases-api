'use strict';
module.exports = (sequelize, DataTypes) => {
  var Database = sequelize.define('Database', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Unnamed database"
    },
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