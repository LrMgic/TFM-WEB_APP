import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDTO, SerchOrderDTO } from '../Models/order.dto';
import { UserDTO } from '../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private urlTFMUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'orders';
    // this.urlTFMUocApi = 'http://localhost:3000/' + this.controller;
    this.urlTFMUocApi = 'https://tfm-api.herokuapp.com/' + this.controller;
  }

  getOrders(): Promise<UserDTO[] | any> {
    return this.http.get<UserDTO[]>(this.urlTFMUocApi).toPromise();
  }
  getOrdersByUserId(userId: string): Promise<UserDTO[] | any> {
    return this.http
      .get<OrderDTO[]>(this.urlTFMUocApi + '/' + userId)
      .toPromise();
  }

  getOrderById(serch: SerchOrderDTO): Promise<SerchOrderDTO | any> {
    return this.http.get<OrderDTO>(this.urlTFMUocApi + '/' + serch).toPromise();
  }
  createOrder(order: OrderDTO): Promise<OrderDTO | any> {
    return this.http.post<OrderDTO>(this.urlTFMUocApi, order).toPromise();
  }

  updateOrder(orderId: string, order: OrderDTO): Promise<OrderDTO | any> {
    return this.http
      .put<OrderDTO>(this.urlTFMUocApi + '/' + orderId, order)
      .toPromise();
  }
}
