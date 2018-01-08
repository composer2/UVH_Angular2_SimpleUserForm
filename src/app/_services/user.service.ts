import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../_models/index';
import * as AES from 'crypto-js';

@Injectable()
export class UserService {
    domain = 'http://18.194.42.165:8080';
  authToken;
  user;
  options;
    constructor(
        private http: Http
    ) { }

      // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'Authorization': 'JWT ' + this.authToken // Attach token
      })
    });
  }

  storeUserData(user, token) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('currentUser', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }
  logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }
  getAll() {
      this.createAuthenticationHeaders(); // Create headers before sending to API
      return this.http.get(this.domain + '/contributors/user/', this.options).map(res => res.json());
  }

  create(user: User) {
    AES.SHA256(user.password1, 'secret key');
    AES.SHA256(user.password2, 'secret key');
      return this.http.post(this.domain + '/contributors/register/', user).map(res => res.json());
  }
}
