import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces/user.interface';
import { ILogin } from '../interfaces/login.interface';
import { IToken } from '../interfaces/token.interface';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export default function generateToken(payload: IUser | ILogin): string {
  const jwtConf: IToken = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, SECRET, jwtConf);
  return token;
}