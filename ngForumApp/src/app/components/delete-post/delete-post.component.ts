import { Component, OnInit } from '@angular/core';
import {DeleteService} from '../../services/delete-service/delete.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.sass'],
  providers: [DeleteService]
})
export class DeletePostComponent implements OnInit {

  printDeletedPost: string;

  constructor(private deleteService: DeleteService) {
    this.printDeletedPost = deleteService.getPostDeleted();
    console.log(this.printDeletedPost);
  }

  ngOnInit() {
  }

}
