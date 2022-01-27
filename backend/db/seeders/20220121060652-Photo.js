'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        url: "https://res.cloudinary.com/zaf/image/upload/v1643263431/woofmeow/pet-sitter-dog-walker-2208129_jzliax.jpg",
        sitterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://res.cloudinary.com/zaf/image/upload/v1643263431/woofmeow/istockphoto-1309806637-170667a_bifhno.jpg",
        sitterId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: "https://res.cloudinary.com/zaf/image/upload/v1643263431/woofmeow/istockphoto-912760940-170667a_pyucnv.jpg",
        sitterId: 3,
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
