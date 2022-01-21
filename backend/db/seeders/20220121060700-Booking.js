'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {
        dog: true,
        cat: true,
        exotic: true,
        instructions: "walk the doge please",
        startDate: "2022-02-14",
        endDate: "2022-02-21",
        sitterId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dog: true,
        cat: false,
        exotic: false,
        instructions: "doge eats veggies",
        startDate: "2022-03-02",
        endDate: "2022-03-10",
        sitterId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dog: false,
        cat: true,
        exotic: true,
        instructions: "cat is cray cray",
        startDate: "2022-02-20",
        endDate: "2022-02-25",
        sitterId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dog: false,
        cat: true,
        exotic: false,
        instructions: "walk the cat please",
        startDate: "2022-02-15",
        endDate: "2022-02-23",
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
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
