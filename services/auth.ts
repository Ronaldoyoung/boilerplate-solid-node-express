import { Service, Inject } from 'typedi';
import { IUserInputDTO, IUser } from '@/interfaces/IUser';
import { Logger } from 'winston';
import User from 'models/user';
import { Model, DataTypes } from 'sequelize';

@Service()
export default class AuthService {
  constructor(
    @Inject('userModel') private userModel: Model,
    @Inject('logger') private logger: Logger,
  ) {}

  public async SignUp(userInputDTO: IUserInputDTO): Promise<{ userRecord: IUser }> {
    try {
      const userRecord: IUser = await User.create({
        ...userInputDTO,
      });

      return { userRecord };
    } catch (err) {
      throw err;
    }
  }
}
