import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: ':id', component: UserDetailComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
