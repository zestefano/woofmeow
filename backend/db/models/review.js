'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    sitterId: {
      type: DataTypes.INTEGER,
      references: { model: "Sitters" }
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: "userId"
    })

    Review.belongsTo(models.Sitter, {
      foreignKey: "sitterId"
    })
  };
  return Review;
};