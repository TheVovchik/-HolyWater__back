'use strict';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../db';

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>,
  email: string,
  password: string,
}

export const Users = sequelize.define<UserModel>('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  },{
  tableName: 'Users',
});
