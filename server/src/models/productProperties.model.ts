import { DataTypes } from 'sequelize';
import sequelize from '../db';

export const ProductProperty = sequelize.define('product_property', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});
