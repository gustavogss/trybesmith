
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/order.interface';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();  
    return orders;
  } 

  public async getOrderService(): Promise<IOrder[]> {   
    const orders = await this.model.createOrder(userId);
    const orderItem = orders.map((order) => ({
      ...order,
      products: [order],
    }));

    return orderItem;
  } 
}
