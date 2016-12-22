System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './voter.component', './twitter.component', './zippy.component', './contact-form.component', './subscription-form.component', './signup-form.component', './change-password.component', './observable-app.component', './github.component', './client.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, voter_component_1, twitter_component_1, zippy_component_1, contact_form_component_1, subscription_form_component_1, signup_form_component_1, change_password_component_1, observable_app_component_1, github_component_1, client_component_1;
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
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            },
            function (observable_app_component_1_1) {
                observable_app_component_1 = observable_app_component_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            },
            function (client_component_1_1) {
                client_component_1 = client_component_1_1;
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
                        template: "<h1>Hello Angular</h1>\n    <courses></courses>\n    <authors></authors>\n    <i class=\"glyphicon glyphicon-star\"></i>\n    <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n\n    <h3>like component</h3>\n    <like [liked]=\"tweet.liked\" [numLikes]=\"tweet.numLikes\"></like>\n\n    <h3>voter component</h3>\n    <voter></voter>\n\n    <h3>tweet challenge</h3>\n    <twitter></twitter>\n\n    <h3>Zippy exercise</h3>\n    <zippy title=\"helloTitle\">\n       <p>YOLO BODY CONTENT</p>\n    </zippy>\n    <zippy title=\"greetings\">\n        <h2>There's a shark behind you!</h2>\n    </zippy>\n\n    <h3>contact form lecture exercise</h3>\n    <contact-form></contact-form>\n\n    <h3>subscription form exercise (lecture 73)</h3>\n    <subscription-form></subscription-form>\n\n    <h3>signup form lecture exercise</h3>\n    <signup-form></signup-form>\n\n    <h3>change password form exercies (lecture 73)</h3>\n    <change-password></change-password>\n\n    <h3>Observable Exercise</h3>\n    <observable-app></observable-app>\n\n    <h3>Connecting to Server (section 9)</h3>\n    <client-component></client-component>\n\n    <h3>GitHub user profile exercise</h3>\n    <github></github>\n    ",
                        directives: [
                            courses_component_1.CoursesComponent,
                            authors_component_1.AuthorsComponent,
                            favorite_component_1.FavoriteComponent,
                            like_component_1.LikeComponent,
                            voter_component_1.VoterComponent,
                            twitter_component_1.TwitterComponent,
                            zippy_component_1.ZippyComponent,
                            contact_form_component_1.ContactFormComponent,
                            subscription_form_component_1.SubscriptionFormComponent,
                            signup_form_component_1.SignUpFormComponent,
                            change_password_component_1.ChangePasswordComponent,
                            observable_app_component_1.ObservableAppComponent,
                            client_component_1.ClientComponent,
                            github_component_1.GithubComponent]
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