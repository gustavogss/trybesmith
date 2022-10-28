import { IProduct } from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);    
  }

  async getAll(): Promise<IProduct[]> {
    return this.model.getAll();    
  }
}