export interface IUser {
  userId: string;
  nickname: string;
  password: string;
}

export interface IUserInputDTO {
  nickname: string;
  userId: string;
  password: string;
}