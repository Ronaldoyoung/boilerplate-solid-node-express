import { IUser } from '@/interfaces/IUser';

declare global {
  namespace Models {
    export type UserModel = IUser;
  }
}
