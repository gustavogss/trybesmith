import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Messages from '../enums/mensages';
import LoginService from '../services/login.services';

export default class LoginController {
  constructor(readonly login = new LoginService()) { }  
  
  getLogin = async (req: Request, res: Response) => {
    const login = req.body;
    const user = await this.login.getLogin(login);
    if (user.type) {
      return res.status(user.type).json({ message: Messages.USERNAME_PASSWORD_INVALID });
    }
    res.status(StatusCodes.OK).json({ token: Messages.LOGIN_SUCESS });
  };
}
