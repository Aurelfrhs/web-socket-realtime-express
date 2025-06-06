'use strict';
const { v4: uuidv4 } = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     await queryInterface.bulkInsert('roles', [
      {
        id: uuidv4(),
        name: 'Super Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: uuidv4(),
        name: 'Industri',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: uuidv4(),
        name: 'Teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: uuidv4(),
        name: 'Student',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        id: uuidv4(),
        name: 'Alumni',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
    ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('roles', null, {});
  }
};
