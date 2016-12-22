import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';
//import {Observable} from 'rxjs/observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Component({
    selector: 'observable-app',
    templateUrl: 'app/observable-app.template.html'
})

export class ObservableAppComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search');
        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x))
        
        //var observable = Observable.fromArray([1, 2, 3]);

        // var observable = Observable
        //     .fromArray(startDates)
        //     .map(date => {
        //         console.log("getting deals for date " + date);
        //         return [1,2,3];
        //     })
        //     .subscribe(x => console.log(x));

        // var startDates = [];
        // var startDate = new Date();

        // for (var day = -2; day = 2; day++) {
        //      var date = new Date(
        //          startDate.getFullYear(),
        //          startDate.getMonth(),
        //          startDate.getDate() + day);
        //      startDates.push(date);
        // }



    //TIMER

        // var observable = Observable.interval(1000);
        // observable
        //     .flatMap(x => {
        //         console.log("calling the server to get the latest news");
        //         return observable.of([1, 2, 3]);  //pretending these are the latest messages since last time we polled the server
        //     })
        //     .subscribe(news => console.log(news));

    //forkJoin

        // var userStream = Observable.of({
        //     userId: 1, username: 'mosh'
        // }).delay(2000);

        // var tweetsStream = Observable.of([1, 2, 3]).delay(1500);
        
        // Observable
        //     .forkJoin(userStream, tweetsStream)
        //     .map(joined => new Object({user: joined[0], tweets: joined[1] }))
        //     .subscribe(result => console.log(result))

    //Handling Errors
        
        // var observable = Observable.throw(new Error("Something failed."));
        // observable.subscribe(x => console.log(x),
        // error => console.error(error)
        // );

    //Retrying

        // var counter = 0;

        // var ajaxCall = Observable.of('url')
        //     .flatMap(() => {
        //         if (++counter < 2)
        //             return Observable.throw(new Error("Request failed"));
                
        //         return Observable.of([1, 2, 3]);
        //     });

        // ajaxCall
        //     .retry(3)
        //     .subscribe(
        //         x => console.log(x),
        //         error => console.error(error));

        

    //Catching and continuing


        //var remoteDataStream = Observable.throw(new Error("Something failed."));
        //OR**
        //var remoteDataStream = Observable.of([4, 5, 6]);

        //catch operator is only called if the first observable (remoteDataStream) fails
        // remoteDataStream  
        //     .catch(err => {      //if remoteDataStream throws an error, we'll catch it and then return another observable
        //         var localDataStream = Observable.of([1, 2, 3]);
        //         return localDataStream;
        //     })
        //     .subscribe(x => console.log(x));

        
        //Timeouts

        //     var remoteDataStream = Observable.of([1, 2, 3]).delay(5000);

        //     remoteDataStream
        //         .timeout(1000)  //on timeout, you should get an error in the console
        //         .subscribe(
        //             x => console.log(x),
        //             error => console.error(error)
        //         )

        // //Getting notified when an observable completes

        //     observable.subscribe(
        //         x => console.log(x),
        //         error => console.log(error),
        //         () => console.log("completed"));
            

    }   

}

