import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import StatusCode from 'http-status-codes';
import Messages from '../enums/mensages';
import { IToken } from '../interfaces/token.interface';

const SECRET = process.env.JWT_SECRET || 'secret';

const validateToken = (req: Request, res: Response, next: NextFunction) => {  
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(StatusCode.UNAUTHORIZED)
      .json({ message: Messages.TOKEN_NOT_FOUND });
  }
  const decoded = jwt.verify(authorization, SECRET);
  const { id } = decoded as IToken;
  req.body = { userId: id, ...req.body };    
  next();  
  return res.status(StatusCode.UNAUTHORIZED).json({ error: Messages.TOKEN_INVALID });
};

export default validateToken;