import {IUser} from './user';

export class UserModel implements IUser {
    _id: string = (Math.floor(Math.random()*90000) + 10000).toString();
    index: number = Math.floor(Math.random()*90) + 10;
    guid: string;
    isActive: boolean;
    balance: number = 0;
    picture: string;
    age: number = 0;
    eyeColor: string;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    latitude: number;
    longitude: number;
    tags: string[];
    friends: Object[];
    greeting: string;
    favoriteFruit: string;
}
