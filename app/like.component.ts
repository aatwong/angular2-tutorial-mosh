import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
         <i class="glyphicon glyphicon-heart"
         [class.selected]="liked"
         (click)="onClick()">
        </i>
        <span>{{numLikes}}</span>
    `,
    styles: [ `
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .selected {
            color: deeppink;
        }
    ` ]
})


export class LikeComponent {
    @Input() liked;
    @Input() numLikes;

    onClick() {
        this.liked = !this.liked;
        this.numLikes += this.liked ? 1 : -1;
    }
}




// [style.color]="isLiked ? deeppink : #ccc"
//             (click)="onClick()"