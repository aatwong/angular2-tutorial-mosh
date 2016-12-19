import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TwitterComponent} from './twitter.component';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
    <i class="glyphicon glyphicon-star"></i>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>

    <h3>like component</h3>
    <like [liked]="tweet.liked" [numLikes]="tweet.numLikes"></like>

    <h3>voter component</h3>
    <voter></voter>

    <h3>tweet challenge</h3>
    <twitter></twitter>

    <h3>Zippy exercise</h3>
    <zippy title="helloTitle">
       <p>YOLO BODY CONTENT</p>
    </zippy>
    <zippy title="greetings">
        <h2>There's a shark behind you!</h2>
    </zippy>
    `,
    directives: [
        CoursesComponent, 
        AuthorsComponent, 
        FavoriteComponent, 
        LikeComponent, 
        VoterComponent, 
        TwitterComponent, 
        ZippyComponent]
})

export class AppComponent { 
   
    post = {
        title: "Title",
        isFavorite: true
    }

    // onVote($event) {
    //     console.log($event);
    // }

    // votePost = {
    //     voteCount: 10,
    //     myVote: 0
    // }

    tweet = {
        liked: false,
        numLikes: 10
    }


    onFavoriteChange($event) {
        console.log($event);
    }
}