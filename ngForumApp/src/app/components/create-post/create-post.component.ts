import { Component, OnInit } from '@angular/core';
import {CreateService} from '../../services/create-service/create.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass'],
  providers: [CreateService]
})

export class CreatePostComponent implements OnInit {

  printCreatedPost: string;

  constructor(private createService: CreateService) {
    this.printCreatedPost = createService.getPostCreated();
    console.log(this.printCreatedPost);
  }

  ngOnInit() {
  }

}
