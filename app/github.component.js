System.register(['angular2/core', './github.service', 'angular2/http', 'rxjs/add/observable/forkJoin', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, github_service_1, http_1, Observable_1;
    var GithubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            GithubComponent = (function () {
                function GithubComponent(_githubService) {
                    this._githubService = _githubService;
                    this.user = "octocat";
                }
                GithubComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._githubService.getUser(this.user), this._githubService.getFollowers(this.user))
                        .subscribe(function (responseFromGithub) {
                        _this.userProfile = responseFromGithub[0];
                        _this.followers = responseFromGithub[1];
                    });
                    // this._githubService.getUser(this.user)
                    // .subscribe(responseFromGithub => {
                    //    console.log(responseFromGithub)
                    //     this.userLogin = responseFromGithub.login,
                    //     this.userPhoto = responseFromGithub.avatar_url
                    //});
                    // this._githubService.getFollowers(this.user)
                    // .subscribe(responseFromGithub => {
                    //     console.log(responseFromGithub),
                    //     this.followerLogin = responseFromGithub[2].login,
                    //     this.followerPhoto = responseFromGithub[2].avatar_url
                    // });
                };
                GithubComponent = __decorate([
                    core_1.Component({
                        selector: '<github>',
                        templateUrl: 'app/github.template.html',
                        styles: ["\n        .avatar {  width: 100; \n            height: 100; \n            border-radius: 100%;  }\n    "],
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubComponent);
                return GithubComponent;
            }());
            exports_1("GithubComponent", GithubComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map