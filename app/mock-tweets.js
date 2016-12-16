System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet, TWEETS;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet() {
                    this.liked = false;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
            exports_1("TWEETS", TWEETS = [
                { title: 'myTitle', handle: '@helloworld', message: 'Never gonna give you up', numLikes: 10, liked: false },
                { title: 'myTitle2', handle: '@hellomars', message: 'Never gonna let you down', numLikes: 20, liked: true },
                { title: 'myTitle3', handle: '@hellomercury', message: 'Never gonna run around', numLikes: 30, liked: false },
                { title: 'myTitle4', handle: '@hellojupiter', message: 'And desert you', numLikes: 40, liked: true }
            ]);
        }
    }
});
//# sourceMappingURL=mock-tweets.js.map