import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// for eager loading
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        UserModule,  // for eager loading
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
