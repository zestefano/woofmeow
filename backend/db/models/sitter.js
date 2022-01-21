'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sitter = sequelize.define('Sitter', {
    dog: DataTypes.BOOLEAN,
    cat: DataTypes.BOOLEAN,
    exotic: DataTypes.BOOLEAN,
    about: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zipcode: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: { model: "Users" }
    }
  }, {});
  Sitter.associate = function(models) {
    // associations can be defined here
    Sitter.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Sitter.hasOne(models.Photo, {
      foreignKey: "sitterId",
      onDelete: "CASCADE",
      hooks: true
    })

    Sitter.hasMany(models.Booking, {
      foreignKey: "sitterId",
      onDelete: "CASCADE",
      hooks: true
    })

    Sitter.hasMany(models.Review, {
      foreignKey: "sitterId",
      onDelete: "CASCADE",
      hooks: true
    })
  };
  return Sitter;
};