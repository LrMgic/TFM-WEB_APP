import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlTFMUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'users';
    // this.urlTFMUocApi = 'http://localhost:3000/' + this.controller;
    this.urlTFMUocApi = 'https://tfm-api.herokuapp.com/' + this.controller;
  }

  register(user: UserDTO): Promise<UserDTO | any> {
    return this.http.post<UserDTO>(this.urlTFMUocApi, user).toPromise();
  }

  updateUser(userId: string, user: UserDTO): Promise<UserDTO | any> {
    return this.http
      .put<UserDTO>(this.urlTFMUocApi + '/' + userId, user)
      .toPromise();
  }

  getUSerById(userId: string): Promise<UserDTO | any> {
    return this.http.get<UserDTO>(this.urlTFMUocApi + '/' + userId).toPromise();
  }
}
