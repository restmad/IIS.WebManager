import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
// Features
import { HomeComponent } from '../main/home.component';


import { NotFound } from '../common/notfound.component';
import { ConnectComponent } from '../connect/connect.component';
import { PreAuthComponent } from '../connect/preauth.component';
import { GetComponent } from './get.component';

const fileRoutes: Routes = [
    { path: '**', component: HomeComponent, data: { section: 'files' } },
]

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'get', component: GetComponent },
    { path: 'connect', component: ConnectComponent },
    { path: 'modules/preauth', component: PreAuthComponent },
    { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
    { path: 'webserver', loadChildren: '../webserver/webserver.module#WebServerModule' },
    { path: ':section', component: HomeComponent },
    // Not Found
    { path: '**', component: NotFound }
];

// - Updated Export
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
