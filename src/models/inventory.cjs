'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.belongsTo(models.TypeLine, { as: 'variant1' })
      Inventory.belongsTo(models.TypeLine, { as: 'variant2' })
    }
  }
  Inventory.init({
    price: DataTypes.FLOAT.UNSIGNED,
    quantity: DataTypes.INTEGER.UNSIGNED,
    sold: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Inventory',
    name: {
      singular: 'inventory',
      plural: 'inventories',
    },
    createdAt: false,
    updatedAt: false,
  });
  return Inventory;
};