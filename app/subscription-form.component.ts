import {Component} from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.template.html'
})

export class SubscriptionFormComponent{
    onSubcribe(form){
        console.log(form.value);
    }

    frequencies = [
        { id: 1, label: 'Daily'},
        { id: 2, label: 'Weekly'},
        { id: 3, label: 'Monthly'}
    ];
}