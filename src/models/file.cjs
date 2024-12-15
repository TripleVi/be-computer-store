'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      File.hasOne(models.User, { as: 'avatar' })
      File.hasOne(models.Product, { as: 'thumbnail' })
      File.hasOne(models.TypeLine, { as: 'photo' })
    }
  }
  File.init({
    url: DataTypes.STRING(500),
    name: DataTypes.STRING,
    originalName: DataTypes.STRING,
    size: DataTypes.INTEGER.UNSIGNED,
    mimeType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'File',
    name: {
      singular: 'file',
      plural: 'files',
    },
    updatedAt: false,
  });
  return File;
};