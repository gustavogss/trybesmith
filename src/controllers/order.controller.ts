import { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import OrderService from '../services/order.services';

export default class OrderController {
  constructor(readonly order = new OrderService()) { }

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.order.getAll();
      res.status(StatusCodes.OK).json(orders);
    } catch (error) {
      next(error);
    }
  };   
}
