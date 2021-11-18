import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
  app.use('/users', route);

  route.get('/', (req, res) => {
    return res.json({ user: 'test' }).status(200);
  })
}