import { IRouter, Router } from 'express';
import * as UserController from '../controllers/user.controller';

const userRoutes: IRouter = Router();

userRoutes.get('/');
userRoutes.post('/register', UserController.createUser);
userRoutes.post('/login', UserController.loginUser);

export default userRoutes;
