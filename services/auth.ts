import { Service, Inject } from "typedi";
import { IUserInputDTO } from '@/interfaces/IUser'
import { Logger } from 'winston';

@Service()
export default class AuthService {
  constructor(@Inject('logger') private logger: Logger){}

  public async SignUp(userInput: IUserInputDTO) {
    try {
      const user = 'test~~';

      return { user };
    } catch (err) {
      throw err;
    }
  }
}
