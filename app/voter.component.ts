import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component ({
    selector: 'voter',
    template: `
    <div class="voter">
        <i class="glyphicon glyphicon-menu-up" 
            [class.selected]="upvoted"
            (click)="onClickUp()">
        </i>
        <span>{{voteCount}}</span>
        <i class="glyphicon glyphicon-menu-down"
            [class.selected]="downvoted"
            (click)="onClickDown()">
        </i>
    </div>
    `,
    styles: [ `
    .voter {
        width: 20px;
        font-size: 22;
        text-align: center;
    }
    .glyphicon {
        color: #999;
        cursor: pointer;
    }
    .selected {
        color: black;
    }
    `]

})

export class VoterComponent {
    @Input upvoted = false;
    @Input downvoted = false;

    @Input voteCount = 0;
    @Input myVote = 0; 

    //@Output vote = new EventEmitter();

    onClickUp() {
        if(this.myVote < 1) {
            this.myVote += 1;
            this.voteCount += 1;
            this.downvoted = false;
            this.vote.emit({ myVote: this.myVote });
            if(this.myVote > 0) {
                this.upvoted=true;
            }
        }
    }

    onClickDown() {
        if(this.myVote > -1) {
            this.myVote -= 1;
            this.voteCount -= 1;
            this.upvoted = false;
            this.vote.emit({ myVote: this.myVote });
            if(this.myVote < 0) {
                this.downvoted = true;
            }
            }
        }
    }
}
