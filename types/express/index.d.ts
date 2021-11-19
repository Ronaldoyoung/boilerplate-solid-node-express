import { Model } from 'sequelize';
import { IUser } from '@/interfaces/IUser';

declare global {
  namespace Models {
    export type UserModel = Model<IUser>
  }
}