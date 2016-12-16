


export class Tweet {
    title: string;
    handle: string;
    message: string;
    numLikes: number;
    liked: false;
}

export const TWEETS: Tweet[] = [
        { title: 'myTitle', handle: '@helloworld', message: 'Never gonna give you up', numLikes: 10, liked: false},
        { title: 'myTitle2', handle: '@hellomars', message: 'Never gonna let you down', numLikes: 20, liked: true},
        { title: 'myTitle3', handle: '@hellomercury', message: 'Never gonna run around', numLikes: 30, liked: false},
        { title: 'myTitle4', handle: '@hellojupiter', message: 'And desert you', numLikes: 40, liked: true}
    ];