import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import AuthService from '@/services/auth';
import { IUserInputDTO } from '@/interfaces/IUser'

const route = Router();

export default (app: Router) => {
  app.use('/auth', route);

  route.post('/signup', async (req, res, next) => {
    try {
      const authServiceInstance = Container.get(AuthService);
      const { user } = await authServiceInstance.SignUp(req.body as IUserInputDTO);
      return res.status(200).json({ user });
    } catch (e) {
      return next(e);
    }
  });
}