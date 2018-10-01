import { NgModule, } from '@angular/core'
import { BootstrapModule } from './boostrap.module'
import { StandardRuntime } from '../runtime/runtime'
import { AppComponent } from './app.component'

@NgModule({
    imports: [BootstrapModule],
    bootstrap: [ AppComponent ],
    providers: [
        { provide: "Runtime", useClass: StandardRuntime}
    ]
})
export class AppModule {
}
