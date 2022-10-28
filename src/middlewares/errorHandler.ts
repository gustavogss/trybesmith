import { Request, Response, NextFunction } from 'express';
import StatusCode from 'http-status-codes';
import Messages from '../enums/mensages';

export default (error: unknown, _req: Request, res: Response, _next: NextFunction) => 
  res.status(StatusCode.INTERNAL_SERVER_ERROR)
    .json(Messages.INTERNAL_SERVER_ERROR);