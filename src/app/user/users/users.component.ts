import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';
import { IUser } from '../../models/user';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    title: string = 'User List';
    searchShow: boolean = false;
    filter: string = "";
    errorMessage: string;
    users: IUser[];

    constructor(
        private _userService: UserService,
        private _router: Router
    ) { }

    ngOnInit() {
        this._userService.getUsers()
        .subscribe(
        users => this.users = users,
        error => this.errorMessage = <any>error
        );
    }

    onSelect(user:IUser){
        this._router.navigate(['/user', user._id]);
    }

    toggleSearch():void {
    	this.searchShow = !this.searchShow;
    }

}
