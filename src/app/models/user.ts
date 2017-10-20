export interface IUser {
    _id: string;
    index: number;
    guid: string;
    isActive: boolean;
    balance: number;
    picture: string;
    age: number;
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
