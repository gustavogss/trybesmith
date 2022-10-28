import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }  

  async getLogin(login: ILogin): Promise<IUser[]> {
    const { username, password } = login;
    const [result] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      `SELECT id, username, classe, level FROM Trybesmith.Users
      WHERE username = ? AND password = ?`, 
      [username, password],
    );
    return result;
  } 
}