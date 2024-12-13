'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User', [{
      id: '1efb9417-bf0d-6bd0-9c01-03199048c0cd',
      email: 'vuongvu@gmail.com',
      username: 'vuongvu2001',
      password: '$2a$10$XnqoCkHnb7bup9SWNeAj7OSHTdgQgpbiCWc4kVitV78E0z6/n2RvO',
      name: 'Vuong Vu',
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
