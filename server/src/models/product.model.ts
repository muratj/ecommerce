import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

export const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER },
  img: { type: DataTypes.STRING },
});
