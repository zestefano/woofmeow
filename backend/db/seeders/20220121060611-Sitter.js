'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sitters', [
      {
        dog: true,
        cat: true,
        exotic: true,
        about: "I love animals!!!",
        zipcode: 33143,
        price: 25,
        url: "https://res.cloudinary.com/zaf/image/upload/v1643263431/woofmeow/pet-sitter-dog-walker-2208129_jzliax.jpg",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dog: true,
        cat: false,
        exotic: true,
        about: "I love animals too!! especially doges!",
        zipcode: 33542,
        price: 27,
        url: "https://res.cloudinary.com/zaf/image/upload/v1643263431/woofmeow/istockphoto-1309806637-170667a_bifhno.jpg",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dog: false,
        cat: false,
        exotic: true,
        about: "I love animals too!! especially lizzards!",
        zipcode: 38462,
        price: 30,
        url: "https://res.cloudinary.com/zaf/image/upload/v1643263431/woofmeow/istockphoto-912760940-170667a_pyucnv.jpg",
        userId: 3,
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
    return queryInterface.bulkDelete('Sitters', null, {});
  }
};
