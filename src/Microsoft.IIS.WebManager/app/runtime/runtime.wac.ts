import { Runtime } from './runtime'
import { AppContextService, NavigationService } from '@microsoft/windows-admin-center-sdk/angular'
import { Router } from "@angular/router"

export class WACRuntime implements Runtime {
    public NavigationService: NavigationService
    public AppContextService: AppContextService

    public InitContext(){
        this.AppContextService.ngInit({ navigationService: this.NavigationService })
    }

    public DestroyContext(){
        this.AppContextService.ngDestroy()
    }
}
