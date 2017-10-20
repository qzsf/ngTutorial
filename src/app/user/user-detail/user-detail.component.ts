import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {IUser} from '../../models/user';
import {UserService} from '../../core/user.service';

import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {

    title: string = 'User Details';
    errorMessage: string;
    user: IUser;
    users: IUser[];

    private _subscription: Subscription;

    constructor(
        private _userService: UserService,
        private _router: Router,
        private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this._subscription = this._route.params.subscribe(params => {
            let id = params['id'];
            this._userService.getUser(id)
                .subscribe(
                user => this.user = user,
                error => this.errorMessage = <any>error
                );
        });
    }
    ngOnDestroy(): void {
        this._subscription.unsubscribe();
        console.log("Destroyed");
    }

    onAgeChanged(num:number):void{
        setTimeout(()=>{
            console.log("number from nested component: "+ num);
            this.user.age = num;
        },1000);
    }

    gotoUsers() { this._router.navigate(['/user']); }

}
