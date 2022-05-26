import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDTO, SerchOrderDTO } from '../Models/order.dto';
import { UserDTO } from '../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private urlBlogUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'orders';
    this.urlBlogUocApi = 'http://localhost:3000/' + this.controller;
  }

  getOrders(): Promise<UserDTO[] | any> {
    return this.http.get<UserDTO[]>(this.urlBlogUocApi).toPromise();
  }
  getOrdersByUserId(userId: string): Promise<UserDTO[] | any> {
    return this.http
      .get<OrderDTO[]>(this.urlBlogUocApi + '/' + userId)
      .toPromise();
  }

  getOrderById(serch: SerchOrderDTO): Promise<SerchOrderDTO | any> {
    return this.http
      .get<OrderDTO>(this.urlBlogUocApi + '/' + serch)
      .toPromise();
  }
  createOrder(order: OrderDTO): Promise<OrderDTO | any> {
    return this.http.post<OrderDTO>(this.urlBlogUocApi, order).toPromise();
  }

  updateOrder(orderId: string, order: OrderDTO): Promise<OrderDTO | any> {
    return this.http
      .put<OrderDTO>(this.urlBlogUocApi + '/' + orderId, order)
      .toPromise();
  }

}
