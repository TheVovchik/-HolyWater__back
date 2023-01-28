'use strict';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../db';

export interface EventModel extends Model<InferAttributes<EventModel>, InferCreationAttributes<EventModel>> {
  id: CreationOptional<number>,
  userId: number,
  title: string,
  description: CreationOptional<string>,
  year: number,
  month: number,
  day: number,
  time: CreationOptional<string>,
}

export const Events = sequelize.define<EventModel>('Event', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  month: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  day: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  },{
  tableName: 'Events',
});