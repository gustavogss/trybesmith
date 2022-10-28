import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IProduct } from '../interfaces/product.interface';
import Messages from '../enums/mensages';

export const validateName = (req: Request, res: Response, next: NextFunction) => {
  const product: IProduct = req.body;
  const { name } = product;
  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: Messages.NAME_REQUIRED });
  }

  if (typeof name !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.NAME_MUST_BE_STRING });
  }
  if (name.length < 3) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.NAME_VALID_LENGTH });
  }
  next();
};

export const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const product: IProduct = req.body;
  const { amount } = product;
  if (!amount) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: Messages.AMOUNT_REQUIRED });
  }
  if (typeof amount !== 'string') {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.AMOUNT_MUST_BE_STRING });
  }
  if (amount.length < 2) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: Messages.AMOUNT_VALID_LENGTH });
  }
  next();
};
