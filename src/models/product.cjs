'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
      Product.belongsTo(models.File, { as: 'thumbnail' })
      Product.hasMany(models.Type)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    views: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Product',
    name: {
      singular: 'product',
      plural: 'products',
    },
  });
  return Product;
};