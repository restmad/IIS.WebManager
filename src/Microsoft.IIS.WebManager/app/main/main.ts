import './polyfills';

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '../environments/environments';

if (environment.isProduction) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
