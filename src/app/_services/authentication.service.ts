import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { UserService } from '../_services/user.service';

@Injectable()
export class AuthenticationService {
    changeLoggedInStatus: Function;
    domain = 'http://18.194.42.165:8080';
    constructor(private http: HttpClient, private userService: UserService) { }

    login(email: string, password: any) {
        return this.http.post<any>(this.domain + '/contributors/login/', { email: email, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.userService.storeUserData(user, user.token);
                    this.changeLoggedInStatus();
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.changeLoggedInStatus();
        this.userService.logout();
        return Observable.of(false);
    }

    isUserLoggedIn() {
        const isUserLoggedIn = localStorage.getItem('currentUser') !== null;
        return  Observable.of(isUserLoggedIn);
    }
}
