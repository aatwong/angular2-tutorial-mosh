import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';  //manually import
import {Injectable} from 'angular2/core';
import {Post} from './post';
import {Observable} from 'rxjs/observable'

@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {}

    getPosts() : Observable<Post[]> {
        return this._http.get(this._url)   //'get' returns an observable of 'response'. then our component will consume the result of this observable
        .map(res => res.json());    //we want to transform the observable response using map
    }

    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
        .map(res => res.json());   
    }

}