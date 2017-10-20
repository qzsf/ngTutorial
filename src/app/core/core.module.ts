import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        UserService,
        {   // bootstrap and load user data before core module startup
            // to make sure users data available when visitors load users
            // user-details component directly like http://localhost:4200/user/57c088554e06d55bca391ff5
            provide: APP_INITIALIZER,
            useFactory: initApp,
            deps: [UserService],
            multi: true
        }
    ]
})
export class CoreModule { }

export function initApp(userService: UserService) {
    return () => userService.getData();
}