import {Component, Input, EventEmitter, Output, Injectable} from 'angular2/core';
import {TweetService} from './tweet.service';
import {TweetComponent} from './tweet.component';

import {Tweet} from './mock-tweets';

@Component ({  //ngFor goes in here
    selector: 'twitter',
    template: `
    <div *ngFor="#tweet of tweets">
        <tweet [title]="tweet.title" [handle]="tweet.handle" [message]="tweet.message" [numLikes]="tweet.numLikes"></tweet>
    </div>
    `,
    providers: [TweetService],
    directives: [TweetComponent]
})

export class TwitterComponent {
    tweets: any[];

    constructor(tweetService: TweetService) {
        this.tweets=tweetService.getTweets();
    }
}

//<tweet [title]={{tweet.title}} [handle]={{tweet.handle}} [message]={{tweet.message}}></tweet>