import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

export const Cart = sequelize.define('cart', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
