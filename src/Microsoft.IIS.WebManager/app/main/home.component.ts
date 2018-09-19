import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OptionsService } from './options.service';

@Component({
    styles: [`
        .sidebar .home::before {content: "\\f015";}

        :host >>> .sidebar > vtabs .items:before {
            content: "";
        }

        :host >>> .sidebar > vtabs .items {
            top: 35px;
        }

        :host >>> .sidebar > vtabs .content {
            margin-top: 10px;
        }
    `],
    template: `
        <div>
            <div class="sidebar" [class.nav]="_options.active">
                <vtabs [markLocation]="true" (activate)="_options.refresh()">
                    <item [name]="'Web Sites'" [ico]="'fa fa-globe'">
                        <website-list></website-list>
                    </item>
                    <item [name]="'Web Server'" [ico]="'fa fa-server'" [routerLink]="['/webserver']"></item>
                    <item [name]="'Files'" [ico]="'fa fa-files-o'">
                        <file-viewer></file-viewer>
                    </item>
                    <item [name]="'Monitoring'" [ico]="'fa fa-medkit'">
                        <monitoring></monitoring>
                    </item>
                </vtabs>
            </div>
        </div>
    `
})
export class HomeComponent {
    constructor(private _options: OptionsService,
        private _route: ActivatedRoute) {
    }
}
