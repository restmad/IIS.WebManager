import { Inject, NgModule, ErrorHandler } from '@angular/core'
import { Router } from '@angular/router'
import {
    CoreServiceModule,
    ResourceService,
    IdleComponent,
    AppContextService,
    NavigationService,
    AppErrorHandler
} from '@microsoft/windows-admin-center-sdk/angular'
import { WACRuntime } from '../runtime/runtime.wac'
import { BootstrapModule } from './bootstrap.module'
import { AppComponent } from './app.component'

@NgModule({
    imports: [ BootstrapModule, CoreServiceModule ],
    bootstrap: [ AppComponent ],
    providers: [
        ResourceService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
        { provide: "Runtime", useClass: WACRuntime}
    ]
})
export class WACAppModule {
    constructor(
        private appContextService: AppContextService,
        private navigationService: NavigationService,
        private router: Router,
        @Inject("Runtime") private runtime: WACRuntime) {
        this.appContextService.initializeModule({})
        // NOTE: all services are only available after app context module is initialized
        this.runtime.AppContextService = this.appContextService
        this.runtime.NavigationService = this.navigationService
        this.router.config.push({ path: 'idle', component: IdleComponent })
    }
}
