import {Component, Injectable} from 'angular2/core';

import {Tweet, TWEETS} from './mock-tweets';



// export class TweetService {
//     getTweets() : Tweet[] {
//         return [
//         { title: 'myTitle', handle: '@helloworld', message: 'Never gonna give you up', numLikes: 0},
//         { title: 'myTitle', handle: '@helloworld', message: 'Never gonna let you down', numLikes: 0},
//         { title: 'myTitle', handle: '@helloworld', message: 'Never gonna run around', numLikes: 0},
//         { title: 'myTitle', handle: '@helloworld', message: 'And desert you', numLikes: 0}
//         ];
//     }
// }



@Injectable() 
export class TweetService {
    getTweets(): Tweet[] {
        return TWEETS;
    }
}