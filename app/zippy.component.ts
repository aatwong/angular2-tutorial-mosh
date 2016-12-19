import {Component, Input} from 'angular2/core';

import {BootstrapPanel} from './bootstrap.panel.component';

@Component ({
    selector: 'zippy',
    template: `
    <bs-panel>
        <div class="heading">{{title}}</div>
        <div class="body">
            <ng-content></ng-content>
        </div>
    </bs-panel>
    `,
    directives: [BootstrapPanel]
})

export class ZippyComponent {
    @Input() title = "heading";
    //@Input() bodyContent= "body";
}