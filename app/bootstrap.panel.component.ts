import {Component, Input} from 'angular2/core';

@Component({
    selector: 'bs-panel',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading" (click)="toggle()">
            <ng-content select=".heading"></ng-content>
            <i *ngIf="!showBody">
                <span class="pull-right glyphicon glyphicon-chevron-down"></span>
            </i>
            <i *ngIf="showBody">
                <span class="pull-right glyphicon glyphicon-chevron-up"></span>
            </i>
        </div>
        <div class="panel-body" *ngIf="showBody">
           <ng-content select=".body"></ng-content>
        </div>
    </div>
    `,
    styles: [`
    .glyphicon {
        float: right;
        vertical-align: middle;
    }
    `]
})

export class BootstrapPanel {
    showBody = false;

    toggle() {
        this.showBody = !this.showBody;
    }
}