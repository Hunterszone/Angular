import { Component, OnInit, OnDestroy } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { CommentPostComponent } from '../comment-post/comment-post.component';
import { interval, timer, Observable, Observer } from 'rxjs';
import {CreateService} from '../../services/create-service/create.service';
import { DeleteService } from '../../services/delete-service/delete.service';
import {CommentService} from '../../services/comment-service/comment.service';
import {UpdateService} from '../../services/update-service/update.service';
import { takeWhile, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit, OnDestroy {
	
  constructor() {}

  getCreatePostComponent(): CreatePostComponent{
	  console.log("Submit button works!");
	  return new CreatePostComponent(new CreateService());
  }

  getUpdatePostComponent(): UpdatePostComponent{
	  return new UpdatePostComponent(new UpdateService());
  }

  getCommentPostComponent(): CommentPostComponent{
	  return new CommentPostComponent(new CommentService());
  }

  getDeletePostComponent(): DeletePostComponent{
	  return new DeletePostComponent(new DeleteService());
  }

  ngOnInit() {
    const myObserv = interval(1000);
    myObserv.subscribe((number: number)=>{
         console.log(number);
		 if(number == 5){
			console.log("Execution stopped!");
			// observer.complete(); //breaks the execution and changes the inner state
		 }
    });

    const mainObserver = Observable.create((observer)=>{
        setTimeout(()=>{
          observer.next('fist package')
        }, 1500)
        setTimeout(()=>{
          observer.next('second package')
        }, 2500)
		setTimeout(()=>{
          observer.next('second package')
        }, 3500)
        setTimeout(()=>{
          observer.error('Too bad!')
		  //console.log('Too bad!');
        }, 4000)
    });
    mainObserver.subscribe(
      (data: string)=>{console.log("Data delivered!")},
      (error: string)=>{console.log("Failed to deliver!")},
    );
  }

  ngOnDestroy() {
		console.log('[takeWhile] ngOnDestory');
  }
  
  //Variant 2. Observable + subscribe + complete:
  /*
	  count: number;
  counter: Observable<number>;

  private alive = true;

  ngOnInit() {
    console.log('[takeWhile] ngOnInit');

    this.counter = new Observable<number>(observer => {
      console.log('[takeWhile] Subscribed');

      let index = -1;
      const interval = setInterval(() => {
        index++;
        console.log(`[takeWhile] next: ${index}`);
        observer.next(index);
		if(index == 10)
			observer.complete();
      }, 1000);
	  
      // teardown
      return () => {
        console.log('[takeWhile] Teardown');
        clearInterval(interval);
      }
    });

    this.counter
    .pipe(takeWhile(() => this.alive))
    .subscribe(
      (value) => this.count = value,
      (error) => console.error(error),
      () => console.log('[takeWhile] complete')
    );
  }

  ngOnDestroy() {
		console.log('[takeWhile] ngOnDestory');
		this.alive = false;
  }
  */
}
