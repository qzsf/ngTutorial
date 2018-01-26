import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

// for lazy loading
const lazyLoadingRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: ':id', component: UserDetailComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full' }
];


// for eager loading
const eagerLoadingRoutes: Routes = [
    {
        path:'user',
        children:[
            { path: 'users', component: UsersComponent },
            { path: ':id', component: UserDetailComponent },
            { path: 'edit/:id', component: UserEditComponent },
            { path: '', redirectTo: 'users', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(eagerLoadingRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
