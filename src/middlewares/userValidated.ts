import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../interfaces/user.interface';
import Messages from '../enums/mensages';

export const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  const { username } = user;
  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: Messages.USERNAME_REQUIRED });
  }

  if (typeof username !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.USERNAME_MUST_BE_STRING });
  }
  if (username.length < 3) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.USERNAME_VALID_LENGTH });
  }  
  next();
};

export const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  const { classe } = user;
  if (!classe) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: Messages.CLASSE_REQUIRED });
  }
  if (typeof classe !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.CLASSE_MUST_BE_STRING });
  }
  if (classe.length < 3) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.CLASSE_VALID_LENGTH });
  }
  next();
};

export const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  const { level } = user;
  if (level < 1) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.LEVEL_VALID });
  }
  if (!level) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: Messages.LEVEL_REQUIRED });
  }
  if (typeof level !== 'number') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.LEVEL_MUST_BE_NUMBER });
  }
  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  const { password } = user;
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: Messages.PASSWORD_REQUIRED });
  }
  if (typeof password !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.PASSWORD_MUST_BE_STRING });
  }
  if (password.length < 8) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.PASSWORD_VALID_LENGTH });
  }
  next();
};