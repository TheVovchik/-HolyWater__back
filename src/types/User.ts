import { Model } from "sequelize";

export interface User extends Model {
  id: number,
  email: string,
  password: string,
  createdAt: Date;
  updatedAt: Date;
}