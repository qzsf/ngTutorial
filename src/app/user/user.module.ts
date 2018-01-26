import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        UserRoutingModule
    ],
    declarations: [UsersComponent, UserDetailComponent, UserEditComponent]
})
export class UserModule { }
