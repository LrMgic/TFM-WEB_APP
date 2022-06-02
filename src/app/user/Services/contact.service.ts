import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDTO, ContactMethodDTO } from '../Models/contact.dto';
import { OrderDTO } from '../Models/order.dto';
import { UserDTO } from '../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private urlTFMUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'contact';
    this.urlTFMUocApi = 'http://tfm-api.netlify.app/' + this.controller;
    // this.urlTFMUocApi = 'http://localhost:3000/' + this.controller;
  }

  getContacts(): Promise<ContactDTO[] | any> {
    return this.http.get<ContactDTO[]>(this.urlTFMUocApi).toPromise();
  }

  getContactByUserId(userId: string): Promise<UserDTO[] | any> {
    return this.http
      .get<ContactDTO[]>(this.urlTFMUocApi + '/' + userId)
      .toPromise();
  }
  getContactByMethod(
    method: ContactMethodDTO
  ): Promise<ContactMethodDTO[] | any> {
    return this.http
      .get<ContactDTO[]>(this.urlTFMUocApi + '/' + method)
      .toPromise();
  }
  createContact(contact: ContactDTO): Promise<ContactDTO | any> {
    return this.http.post<OrderDTO>(this.urlTFMUocApi, contact).toPromise();
  }

  updateContact(
    contact_id: string,
    contact: ContactDTO
  ): Promise<ContactDTO | any> {
    return this.http
      .put<OrderDTO>(this.urlTFMUocApi + '/' + contact_id, contact)
      .toPromise();
  }
}
