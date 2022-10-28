import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.services';

export default class ProductController {
  constructor(readonly productService = new ProductService()) {
  }
  
  create = async (req: Request, res: Response, next: NextFunction) => {    
    try {
      const productCreated = await this.productService.create(req.body);
      res.status(StatusCodes.CREATED).json(productCreated);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {     
      const products = await this.productService.getAll();
      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      next(error);
    }
  };
}