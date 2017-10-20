import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

    constructor(private _http: HttpClient) {
    }


    getData(): void {
        // console.log("getdata");
        this._http.get<IUser[]>(USER_URL)
            .map(response => response["result"])
            // .do(data => console.log("Data: " + JSON.stringify(data)))
            .catch(this._handleError)
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error
            );
            // the map operator takes the raw http response object, and translates it into an array of users
            // <IUser[]> cast the json object to the user array
            // .map((response: Response) => <IUser[]>response.json())
            // .do(data => console.log("Data: " + JSON.stringify(data)))
            // .catch(this._handleError);
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

    private _handleError(error: HttpErrorResponse) {
        console.error(error.message);
        return Observable.throw(error.message || 'Error');
    }

}
