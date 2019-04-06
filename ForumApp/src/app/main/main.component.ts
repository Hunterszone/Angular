import { Component, OnInit } from '@angular/core';
import { CreatePostComponent } from '../create-post/create-post.component';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { CommentPostComponent } from '../comment-post/comment-post.component';
import { interval, Observable, Observer } from 'rxjs';
import {CreateService} from '../create.service';
import { DeleteService } from '../delete.service';
import {CommentService} from '../comment.service';
import {UpdateService} from '../update.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {

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
    // const myObserv = interval(1000);
    // myObserv.subscribe((number: number)=>{
    //     console.log(number);
    // });

    const mainObserver = Observable.create((observer: Observer)=>{
        setTimeout(()=>{
          observer.next('fist package')
        }, 2000)
        setTimeout(()=>{
          observer.next('second package')
        }, 4000)
        setTimeout(()=>{
          observer.complete() //breaks the execution
        },5000)
        setTimeout(()=>{
          observer.error('Too bad!')
        }, 6000)
    });
    mainObserver.subscribe(
      (data: string)=>{console.log("Data delivered!")},
      (error: string)=>{console.log("Failed to deliver!")},
    );
  }


}
