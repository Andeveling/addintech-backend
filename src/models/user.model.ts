import { Schema, model } from 'mongoose';
import { UserI, UserSchema } from '../types/user.types';

const UserSchema = new Schema<UserI>(
  {
    email: { type: String, required: true, trim: true, unique: true, sparse: true },
    password: { type: String, required: true, trim: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model<UserSchema>('User', UserSchema);
