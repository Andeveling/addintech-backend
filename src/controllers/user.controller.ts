import { RequestHandler } from 'express';
import User from '../models/user.model';
import { UserI } from '../types/user.types';
import bcrypt, { hash } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import config from '../config';

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { email, password }: UserI = req.body;
    const newUser = { email, password: await hash(password, 10) };
    const user = await User.create(newUser);
    res.status(200).json({ code: 200, message: 'User Created!', user: user.email });
  } catch (error) {
    res.status(500).json({ code: 500, message: 'Failed to create user.', error });
  }
};

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const { email, password }: UserI = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, resp) => {
        if (err) return res.json(err);
        if (resp) {
          // Send JWT
          // res.status(200).json({ message: "Valid password" })
          const token = jsonwebtoken.sign({ id: user._id }, config.JWT_TOKEN, {
            expiresIn: 60 * 60 * 24
          });
          const result = { id: user._id, auth: true, email: user.email, token: token };
          return res.status(200).json(result);
        } else {
          // response is OutgoingMessage object that server response http request
          return res.status(500).json({ success: false, message: 'passwords do not match' });
        }
      });
      return;
    } else {
      return res.status(401).json({ error: 'User does not exist' });
    }
  } catch (error) {
    res.status(500).json({ message: 'error', error });
  }
};
