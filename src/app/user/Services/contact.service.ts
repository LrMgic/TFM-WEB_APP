import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDTO, ContactMethodDTO } from '../Models/contact.dto';
import { OrderDTO, SerchOrderDTO } from '../Models/order.dto';
import { UserDTO } from '../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private urlBlogUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'contact';
    this.urlBlogUocApi = 'http://localhost:3000/' + this.controller;
  }

  getContacts(): Promise<ContactDTO[] | any> {
    return this.http.get<ContactDTO[]>(this.urlBlogUocApi).toPromise();
  }
  
  getContactByUserId(userId: string): Promise<UserDTO[] | any> {
    return this.http
      .get<ContactDTO[]>(this.urlBlogUocApi + '/' + userId)
      .toPromise();
  }
  getContactByMethod(method: ContactMethodDTO): Promise<ContactMethodDTO[] | any> {
    return this.http
      .get<ContactDTO[]>(this.urlBlogUocApi + '/' + method)
      .toPromise();
  }
  createContact(contact: ContactDTO): Promise<ContactDTO | any> {
    return this.http.post<OrderDTO>(this.urlBlogUocApi, contact).toPromise();
  }

  updateContact(contact_id: string, contact: ContactDTO): Promise<ContactDTO | any> {
    return this.http
      .put<OrderDTO>(this.urlBlogUocApi + '/' + contact_id, contact)
      .toPromise();
  }

}
