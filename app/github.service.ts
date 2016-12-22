import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';  //manually import
import {Injectable} from 'angular2/core';
//import {GithubProfile} from './github-profile';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class GithubService{
    private _userBaseUrl = "https://api.github.com/users/";
    private _followersBaseUrl = "https://api.github.com/users/";

    constructor(private _http: Http) {}

    getUser(username) {
        return this._http.get(this._userBaseUrl + username)
            .map(res=>res.json());
    }

    getFollowers(username) {
        return this._http.get(this._followersBaseUrl + username + "/followers")
            .map(res=>res.json());
    }
}