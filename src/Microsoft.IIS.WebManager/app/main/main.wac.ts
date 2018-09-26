import "./polyfills";

import { AppModule } from './app.module';
import { CoreEnvironment } from '@microsoft/windows-admin-center-sdk/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '../environments/environments';

if (environment.isProduction) {
    enableProdMode();
}

environment.isWAC = true

// initialize SME module environment with localization settings.
CoreEnvironment.initialize(
    {
        name: 'microsoft.wac-iis',
        isProduction: true,
        shellOrigin: '*'
    },
    {
        resourcesPath: 'assets/strings'
    })
    .then(() => platformBrowserDynamic().bootstrapModule(AppModule));
