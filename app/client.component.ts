//Secion 9: Connecting to the Server
// this component serves as the "app component" that was used in the tutorial

import {Component} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'client-component',
    template:`<div *ngIf="isLoading">Getting data...</div>`,
    providers: [PostService, HTTP_PROVIDERS]
})

export class ClientComponent implements OnInit {
    isLoading = true;

    constructor(private _postService: PostService){
        //this._postService.createPost({userId: 1, title: "a", body: "b"})
    }

    ngOnInit(){
    this._postService.getPosts()
        .subscribe(posts => {
            this.isLoading = false;
            console.log(posts[0].id)
        });   //json object pushed from service into this callback function
    }
}