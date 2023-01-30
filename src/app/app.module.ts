import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SecureComponent } from './secure/secure.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { SharedModule } from "./shared/shared.module";
import {ConfigService} from "./config.service";


export const configFactory = (configService: ConfigService) => {
    return () => configService.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        SecureComponent,
        AdminDashboardComponent,
        UserDashboardComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule, // imports the modules that are shared across the entire application which avoids circular dependency issues
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: configFactory,
            deps: [ConfigService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
