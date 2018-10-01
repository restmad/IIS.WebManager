﻿import { Component, OnDestroy, ViewChild } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';

import { Humanizer } from '../../common/primitives';
import { MonitoringService } from './monitoring.service';
import { MonitoringComponent } from './monitoring.component';
import { ServerSnapshot } from './server-snapshot';

@Component({
    selector: 'network-chart',
    template: `
        <div class="row chart-info" *ngIf="_snapshot">
            <div class="col-xs-4">
                <label class="block">
                    Total Bytes Sent
                </label>
                {{formatMemory(_snapshot.network.total_bytes_sent)}}
            </div>
            <div class="col-xs-4">
                <label class="block">
                    Total Bytes Received
                </label>
                {{formatMemory(_snapshot.network.total_bytes_recv)}}
            </div>
            <div class="col-xs-4">
                <div>
                    <label>
                        Active Connections
                    </label>
                    <tooltip>
                        Total number of current network connections that are open on the web server.
                    </tooltip>
                </div>
                {{formatNumber(_snapshot.network.current_connections)}}
            </div>
            <div class="clearfix visible-xs-block"></div>
        </div>
        <div class="block">
            <canvas #chart='base-chart' baseChart width="600" height="200"
                        [datasets]="_data"
                        [labels]="_labels"
                        [options]="_options"
                        [colors]="_colors"
                        [legend]="true"
                        [chartType]="'line'"></canvas>
        </div>
    `,
    styleUrls: [
        'monitoring.css'
    ]
})
export class NetworkChart implements OnDestroy {

    _snapshot: ServerSnapshot = null;
    private _subscriptionId: number = null;
    private _length = 20;
    private formatNumber = Humanizer.number;
    private formatMemory = Humanizer.memory;

    _options: any = {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        // Create labels
                        callback: function (value, index, values) {
                            if (value == 0) {
                                return value;
                            }
                            // float values less than five causing y axis scale label clipping https://github.com/chartjs/Chart.js/issues/729
                            else if (values[0] < 6) {
                                return value.toFixed(1);
                            }
                            else if (value < 1) {
                                return value.toFixed(1);
                            }
                            else if (value < 1024) {
                                return value;
                            }
                            return Humanizer.memory(value);
                        }
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ]
        },
        elements: {
            line: {
                tension: 0,
                fill: false
            }
        }
    };

    _colors: Array<any> = MonitoringComponent.DefaultColors;

    private _bytesSentSecValues: Array<number> = [];
    private _bytesRecvSecValues: Array<number> = [];
    _labels: Array<string> = [];

    @ViewChild('chart') private _networkChart: BaseChartDirective;

    _data: Array<any> = [
        { data: this._bytesSentSecValues, label: 'Bytes Sent / sec' },
        { data: this._bytesRecvSecValues, label: 'Bytes Recv /sec' }
    ];

    constructor(private _svc: MonitoringService) {

        for (let i = 0; i < this._length; i++) {
            this._labels.push('');
        }

        this.activate();
    }

    public activate() {
        this._subscriptionId = this._svc.subscribe(snapshot => this.consumeSnapshot(snapshot));
    }

    public deactivate() {
        this._svc.unsubscribe(this._subscriptionId);
    }

    public ngOnDestroy() {
        this.deactivate();
    }

    private consumeSnapshot(snapshot: ServerSnapshot) {

        this._snapshot = snapshot;

        //
        // Network
        this._bytesSentSecValues.push(snapshot.network.bytes_sent_sec);

        if (this._bytesSentSecValues.length > this._length) {
            this._bytesSentSecValues.shift();
        }

        this._bytesRecvSecValues.push(snapshot.network.bytes_recv_sec);

        if (this._bytesRecvSecValues.length > this._length) {
            this._bytesRecvSecValues.shift();
        }

        //
        // Update graphs
        if (this._networkChart && this._networkChart.chart) {
            this._networkChart.chart.update();
        }
    }
}
