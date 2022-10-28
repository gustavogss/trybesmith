import { Algorithm } from 'jsonwebtoken';

export interface IToken {
  id?:number,
  expiresIn: string,
  algorithm: Algorithm,
}  
