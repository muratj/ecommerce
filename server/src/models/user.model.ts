import { DataTypes } from 'sequelize';
import sequelize from '../configs/db.config';

export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    // validate: {
    //   is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    // },
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'USER',
    validate: { isIn: [['ADMIN', 'USER']] },
  },
});
