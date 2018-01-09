import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { AuthenticationService } from './_services/index';

import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    isUserLoggedIn = true;

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.authenticationService.changeLoggedInStatus =
            () =>
                this.authenticationService.isUserLoggedIn()
                    .subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
    }

    ngOnInit() {
        this.authenticationService.isUserLoggedIn()
            .subscribe(isLoggedIn => this.isUserLoggedIn = isLoggedIn);
    }
}
