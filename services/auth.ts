import { Service, Inject } from "typedi";
import { IUserInputDTO } from '@/interfaces/IUser'

@Service()
export default class AuthService {

  public async SignUp(userInput: IUserInputDTO) {
    try {
      console.log('singup test...', userInput);
      const user = 'test';

      return { user };
    } catch (e) {
      throw e;
    }
  }
}
