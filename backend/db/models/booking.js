'use strict';

const { all } = require("sequelize/types/lib/operators");

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    dog: DataTypes.BOOLEAN,
    cat: DataTypes.BOOLEAN,
    exotic: DataTypes.BOOLEAN,
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sitterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Sitters" }
    }
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.Sitter, {
      foreignKey: "sitterId"
    });
  };
  return Booking;
};