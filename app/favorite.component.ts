import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [
        `.glyphicon-star {
            color: red;
        }
        `
    ]
})

export class FavoriteComponent{
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick(){
        if (this.isFavorite == true) {
            this.isFavorite = false;
        }
        else {
            this.isFavorite = true;
        }
        this.change.emit({ newValue: this.isFavorite });
    }
}