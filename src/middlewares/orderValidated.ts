import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Messages from '../enums/mensages';
import { IOrder } from '../interfaces/order.interface';

export const validateOrders = (req: Request, res: Response, next: NextFunction) => {
  const order: IOrder = req.body;
  const { productsIds } = order;
  if (!productsIds) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json(Messages.PRODUCTS_REQUIRED);
  }
  if (!Array.isArray(productsIds)) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json(Messages.PRODUCTS_MUST_BE_ARRAY);
  }
  if (productsIds.length < 1) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json(Messages.PRODUCTS_VALID_NUMBERS);
  }
  next();
};

export default validateOrders;