'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TypeLine.belongsTo(models.Type)
      TypeLine.belongsTo(models.File, { as: 'photo' })
      TypeLine.hasMany(models.Inventory, { as: 'variant1' })
      TypeLine.hasMany(models.Inventory, { as: 'variant2' })
    }
  }
  TypeLine.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeLine',
  });
  return TypeLine;
};