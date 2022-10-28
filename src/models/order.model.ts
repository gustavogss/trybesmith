import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/order.interface';

export default class OrderModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll():Promise<IOrder[]> {
    const [result] = await this.connection
      .execute(`SELECT O.id,O.userId, JSON_ARRAYAGG(P.id) AS productsIds 
      FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
      INNER JOIN Trybesmith.Users AS U ON O.userId = U.id    
      GROUP BY P.orderId
    ;`, []);  
    return result as IOrder[];
  }  

  async createOrder(userId: number) {
    const result = await this.connection
      .execute('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
    return result;
  }
}
