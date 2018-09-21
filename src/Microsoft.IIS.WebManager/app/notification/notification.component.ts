import { Component, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { NotificationService } from './notification.service';
import { Notification, NotificationType } from './notification';
import { DynamicComponent } from '../common/dynamic.component';

@Component({
    selector: 'notifications',
    exportAs: 'notifications',
    styles: [`
        .notifications {
            width: 100%;
            position: absolute;
            top: 0;
            margin-top: 35px;
            color: #444;
            overflow: hidden;
            font-size:16px;
        }
        .exit {
            cursor: pointer;
            position: absolute;
            right: 15px;
            top: 10px;
            font-size: 120%;
        }
        .entry {
            position:relative;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            white-space: normal;
        }
    `],
    template: `
        <div class="notifications shadow">
            <div *ngIf="_warning" class="entry warning border-active" (keyup.esc)="clearWarning()" tabindex="-1" autofocus (blur)="onBlur()" (focus)="onFocus()">
                <i class="fa fa-times exit" (click)="clearWarning()" title="Dismiss"></i>
                <dynamic [name]="_warning.componentName" [module]="_warning" [data]="_warning.data" [eager]="true"></dynamic>
            </div>
            <div [hidden]="!_active">
                <div *ngFor="let notification of _notifications; let i = index;" [hidden]="notification._hidden" class="entry background-normal border-active">
                    <i class="fa fa-times exit" (click)="dismiss(i)" title="Dismiss"></i>
                    <dynamic [name]="notification.componentName" [module]="notification" [data]="notification.data" [eager]="true"></dynamic>
                </div>
            </div>
        </div>
    `
})
export class NotificationComponent implements OnDestroy {
    private _active: boolean;
    private _warningTimer: NodeJS.Timer;
    private _warning: Notification;
    private _subscriptions: Subscription[] = [];
    private _notifications: Array<Notification> = [];
    private _warningTimeout: number = 1 * 1000; // ms
    private _showNext: boolean = true;

    @ViewChildren(DynamicComponent) private _dynamics: QueryList<DynamicComponent>;

    constructor(private _service: NotificationService, private _router: Router) {
        this.initialize();
    }

    private initialize() {

        this._subscriptions.push(this._service.notifications.subscribe(notifications => {
            this._notifications = notifications.filter(notification => {
                return notification.type == NotificationType.Information;
            });

            // Get warning
            let warnings = notifications.filter(not => not.type == NotificationType.Warning);
            this._warning = warnings.length > 0 ? warnings[warnings.length - 1] : null;
            this.rebindWarning();

            if (this._showNext) {
                this._active = true;
                this._showNext = false;
            }
        }));

        this._subscriptions.push(this._service.activate.subscribe(a => {
            if (a) {
                this._notifications.forEach(n => (<any>n)._hidden = false);
            }

            this._active = a;
        }));

        //
        // Hide whenever the user navigates
        this._subscriptions.push(this._router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this._service.hide();
            }
        }));
    }

    public toggle() {
        this._active = !this._active;
    }

    private clearWarning() {
        this._service.remove(this._warning);
        this._service.clearWarnings();
    }

    private dismiss(index: number) {
        let notification = this._notifications[index];

        if (notification.highPriority) {
            (<any>notification)._hidden = true;
        }
        else {
            this._service.remove(notification);
        }

        if (this._notifications.filter(n => !(<any>n)._hidden).length == 0) {
            this._service.hide();
            this._showNext = true;
        }
    }

    public ngOnDestroy() {
        while (this._subscriptions.length > 0) {
            this._subscriptions.pop().unsubscribe();
        }
    }

    private rebindWarning() {
        if (this._dynamics && this._warning) {
            for (var dynamic of this._dynamics.toArray()) {
                if (dynamic.name == this._warning.componentName) {
                    dynamic.rebind(this._warning.data);
                }
            }
        }
    }

    private resetWarningTimer() {
        if (this._warningTimer != null) {
            clearTimeout(this._warningTimer);
        }

        this._warningTimer = setTimeout(() => {
            this.clearWarning();
        }, this._warningTimeout);
    }

    private onBlur() {
        this.resetWarningTimer();
    }

    private onFocus() {
        if (this._warningTimer != null) {
            clearTimeout(this._warningTimer);
        }
        else {
            this.resetWarningTimer();
        }
    }
}
