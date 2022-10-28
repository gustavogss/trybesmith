import connection from '../models/connection';
import UserModel from '../models/user.model';

import { IUser } from '../interfaces/user.interface';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: IUser): Promise<void> {
    await this.model.create(user);    
  } 
}  
