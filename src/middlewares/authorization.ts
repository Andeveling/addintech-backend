import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config';

export const SECRET_KEY: Secret = config.JWT_TOKEN;
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

// Authorization
export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer', '').trim();
    if (!token) throw new Error();
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;
    next();
  } catch (_error) {
    res.sendStatus(401);
  }
};
