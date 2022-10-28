import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import StatusCodes from 'http-status-codes';
import dotenv from 'dotenv';
import UserService from '../services/user.services';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export default class UserController {
  constructor(readonly userService = new UserService()) {  
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {   
    try {     
      await this.userService.create(req.body);
      const token = jwt.sign(req.body, SECRET);
      res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      next(error);
    }
  };
}