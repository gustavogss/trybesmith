import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';
import LoginModel from '../models/login.model';
import connection from '../models/connection';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';
import Messages from '../enums/mensages';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export default class LoginService {  
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }   
  
  async getLogin(login: ILogin) {
    const user = await this.model.getLogin(login);

    if (user.length === 0) {
      return { type: StatusCodes.UNAUTHORIZED, message: Messages.USERNAME_PASSWORD_INVALID };
    } 
    const token = this.generateToken(user[0]);
    return { type: null, message: token };
  }

  private generateToken = (user:IUser) => {
    const payload = { id: user.id, name: user.username, classe: user.classe };
    return jwt.sign(payload, SECRET);
  };
}
