'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role)
      User.belongsTo(models.File, { as: 'avatar' })
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    name: {
      singular: 'user',
      plural: 'users',
    },
  });
  return User;
};