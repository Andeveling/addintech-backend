import { Document } from 'mongoose';

export interface UserI {
  email: string;
  password: string;
}

export interface UserSchema extends UserI, Document {}
