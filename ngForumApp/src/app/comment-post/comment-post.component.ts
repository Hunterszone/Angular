import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.sass'],
  providers: [CommentService]
})
export class CommentPostComponent implements OnInit {

  printComments: string;

  constructor(private commentService: CommentService) {
    this.printComments = commentService.getComments();
    console.log(this.printComments);
  }

  ngOnInit(){}

}
