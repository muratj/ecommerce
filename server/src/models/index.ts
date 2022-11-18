import { DataTypes } from 'sequelize';
import sequelize from '../db';
import { User } from './user.model';
import { Cart } from './cart.model';
import { Product } from './product.model';
import { Type } from './type.model';
import { Brand } from './brand.model';
import { ProductProperty } from './productProperties.model';

export { User, Cart, Product, Type, Brand, ProductProperty };

export const CartList = sequelize.define('cart_list', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartList);
CartList.belongsTo(Cart);

CartList.belongsTo(Product);

Type.hasMany(Product);
Product.belongsTo(Type);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(ProductProperty);
ProductProperty.belongsTo(Product);

Product.hasMany(CartList);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });
