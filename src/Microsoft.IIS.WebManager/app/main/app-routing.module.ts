import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Features
import { HomeComponent } from '../main/home.component';
import { SettingsModule } from '../settings/settings.module'

import { NotFound } from '../common/notfound.component';
import { ConnectComponent } from '../connect/connect.component';
import { GetComponent } from './get.component';

// These are the basic routes that are required in order to load an extension and make service calls.
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'get', component: GetComponent },
    { path: 'connect', component: ConnectComponent },
    { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
    { path: 'webserver', loadChildren: () => import('../webserver/webserver.module').then(m => m.WebServerModule) },
    { path: ':section', component: HomeComponent },
    // Not Found
    { path: '**', component: NotFound }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false,
                initialNavigation: true
            })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
