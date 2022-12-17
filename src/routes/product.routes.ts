import { IRouter, Router } from 'express';

const productRouter: IRouter = Router();

productRouter.get('/');
productRouter.get('/getAll');
productRouter.get('/get');
