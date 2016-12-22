import {Component, OnInit} from 'angular2/core';
import {GithubService} from './github.service';
import {HTTP_PROVIDERS} from 'angular2/http';
//import {GithubProfile} from './github-profile';
import 'rxjs/add/observable/forkJoin';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: '<github>',
    templateUrl: 'app/github.template.html',
    styles: [`
        .avatar {  width: 100; 
            height: 100; 
            border-radius: 100%;  }
    `],
    providers: [GithubService, HTTP_PROVIDERS]
})

export class GithubComponent implements OnInit{
    user = "octocat";
    // userLogin: string;
    // userPhoto: string;
    // followerLogin: string;
    // followerPhoto: string;
    // numFollowers: number;
    userProfile: {};
    followers;

    constructor(private _githubService: GithubService){}
    
    ngOnInit(){

        Observable.forkJoin(
            this._githubService.getUser(this.user), 
            this._githubService.getFollowers(this.user)
        )
        .subscribe(responseFromGithub => {
            this.userProfile = responseFromGithub[0];
            this.followers = responseFromGithub[1];
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
    }
}
