import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routes } from './utilities/routes.util';

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
routes(app);

export default app;
