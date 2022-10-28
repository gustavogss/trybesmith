import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

export default class UserModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(users: IUser): Promise<void> {
    const { username, classe, level, password } = users;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );      
  }
}