'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [{
        role:"Actor",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        role:"Actress",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        role:"Director",
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        role:"Producer",
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
