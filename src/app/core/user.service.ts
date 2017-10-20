import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// load and run these three operators, and make them available to the app. they don't really import anything.
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

const USER_URL = 'assets/users.json';

@Injectable()
export class UserService {
    users: IUser[];
    errorMessage: string;

    constructor(private _http: Http) {
        // console.log('UserService');
        this.getData().subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error
        );
    }



    getData(): Observable<IUser[]> {
        console.log("getdata")
        return this._http.get(USER_URL)
            // the map operator takes the raw http response object, and translates it into an array of users
            // <IUser[]> cast the json object to the user array
            .map((response: Response) => <IUser[]>response.json())
            //.do(data => console.log("Data: " + JSON.stringify(data)))
            .catch(this._handleError);
    }

    getUsers(): Observable<IUser[]> {
        return Observable.of(this.users);
    }

    getUser(id: string): Observable<IUser> {
        // console.log(this.users);
        let user = this.users.find(user => user._id === id);
        return Observable.of(user);
    }

    updateUser(theUser: IUser): void {
        let index = this.users.findIndex(user => user._id === theUser._id);
        this.users[index] = theUser;
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Error');
    }

}
