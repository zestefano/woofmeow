'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        review: "they did a great job!!!",
        rating: 5,
        userId: 2,
        sitterId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: "fed pebbles too much",
        rating: 3,
        userId: 1,
        sitterId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        review: "louie loved the care!",
        rating: 4,
        userId: 3,
        sitterId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
