import { Component, OnInit } from '@angular/core';

import { IUser } from '../models/user';
import { UserService } from '../core/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title: string = 'Home';
    errorMessage: string;
    currentUser: IUser;

    constructor( private _userService: UserService ) { }

    ngOnInit() {
    }

}
