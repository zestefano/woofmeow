'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sitterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Sitters" }
    }
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.Sitter, {
      foreignKey: "sittedId"
    })
  };
  return Photo;
};