import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/user';

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

    transform(value: IUser[], arg: string): IUser[] {
        console.log(arg);
        let filter: string = arg ? arg.toLocaleLowerCase() : null;
        return filter ? value.filter((user: IUser) => user.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }

}
