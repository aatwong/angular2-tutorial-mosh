System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './voter.component', './twitter.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, voter_component_1, twitter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (twitter_component_1_1) {
                twitter_component_1 = twitter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    // onVote($event) {
                    //     console.log($event);
                    // }
                    // votePost = {
                    //     voteCount: 10,
                    //     myVote: 0
                    // }
                    this.tweet = {
                        liked: false,
                        numLikes: 10
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Hello Angular</h1>\n    <courses></courses>\n    <authors></authors>\n    <i class=\"glyphicon glyphicon-star\"></i>\n    <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n\n    <h3>like component</h3>\n    <like [liked]=\"tweet.liked\" [numLikes]=\"tweet.numLikes\"></like>\n\n    <h3>voter component</h3>\n    <voter></voter>\n\n    <h3>tweet challenge</h3>\n    <twitter></twitter>\n    ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent, twitter_component_1.TwitterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map