import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from '../Models/auth.dto';

interface AuthToken {
  user_id: string;
  access_token: string;
  userrol: string;
  alias: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlTFMUocApi: string;
  private controller: string;

  constructor(private http: HttpClient) {
    this.controller = 'auth';
    this.urlTFMUocApi = 'http://tfm-api.netlify.app/' + this.controller;
    // this.urlTFMUocApi = 'http://localhost:3000/' + this.controller;
  }

  login(auth: AuthDTO): Promise<AuthToken | any> {
    return this.http.post<AuthToken>(this.urlTFMUocApi, auth).toPromise();
  }
}
