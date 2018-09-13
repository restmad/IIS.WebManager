import { Component, OnDestroy, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Constants } from './constants';
import { ConnectService } from './connect.service';
import { ApiConnection } from './api-connection';

@Component({
    template: `
    <div class="center">
        <div class="in-progress" *ngIf='_connecting'>
            <h1>Connecting</h1>
            <p><i class="fa fa-spinner fa-pulse fa-3x"></i></p>
        </div>
    </div>
    `
})
export class PreAuthComponent implements OnDestroy, OnInit {
    private _connecting: boolean;
    private _conn: ApiConnection;
    private _subs: Array<Subscription> = [];

    constructor(private _service: ConnectService, private _router: Router) {
        this._subs.push(this._service.connecting.subscribe(c => {
            this._connecting = (c != null);
        }));
    }

    ngOnDestroy() {
        this._subs.forEach(s => s.unsubscribe());

        // Stop if still connecting
        if (this._connecting) {
            this._service.cancel();
        }
    }

    ngOnInit() {
        this._conn = new ApiConnection(Constants.localUrl);
        this._conn.displayName = Constants.localDisplayName;
        this._conn.accessToken = "yBGt5_E-ukr27N5Dzb6qi0LNDx-DKt-KhYeLHzwBFGLbNXRRQA9-kg";
        this.connect();
    }

    private connect() {
        this._service.connect(this._conn).then(conn => {
            this._service.save(this._conn);
            this._router.navigate(["/"]);
        });
    }
}

