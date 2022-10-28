import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/product.interface';

export default class ProductModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: IProduct): Promise<IProduct> {  
    const { name, amount } = product;    
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );    
    return { id: insertId, ...product };    
  }

  async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');  
    return result as IProduct[];
  }  
}