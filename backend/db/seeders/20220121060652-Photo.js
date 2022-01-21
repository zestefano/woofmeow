'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        url: "https://res.cloudinary.com/zaf/image/upload/v1638986168/samples/people/kitchen-bar.jpg",
        sitterId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://res.cloudinary.com/zaf/image/upload/v1638986170/samples/people/smiling-man.jpg",
        sitterId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://res.cloudinary.com/zaf/image/upload/v1638986171/samples/people/boy-snow-hoodie.jpg",
        sitterId: 9,
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
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
