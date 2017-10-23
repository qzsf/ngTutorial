import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IUser } from '../../models/user';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../core/user.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    title: string = 'Edit User: ';
    errorMessage: string;
    user: IUser;

    newUser: boolean = false;

    private _subscription: Subscription;

    constructor(
        private _userService: UserService,
        private _router: Router,
        private _route: ActivatedRoute) { }

    ngOnInit() {
        this._subscription = this._route.params.subscribe(params => {
            let id = params['id'];
            if (id != '0') {
                this._userService.getUser(id)
                    .subscribe(
                    user => this.user = user,
                    error => this.errorMessage = <any>error
                    );
            } else {
                this.user = new UserModel();
                this.title = 'New User: ';
                this.newUser = true;
            }
        });
    }

    update(): void {
        // create a new user
        if (this.newUser) {
            this._userService.createUser(this.user);
        } else {    // update a user
            this._userService.updateUser(this.user);
        }
        this._router.navigate(['/user']);
    }

    onAgeChanged(num:number):void{
        setTimeout(()=>{
            console.log("number from nested component: "+ num);
            this.user.age = num;
        },1000);
    }

}
