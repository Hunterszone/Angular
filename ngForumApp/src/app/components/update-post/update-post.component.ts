import { Component, OnInit } from '@angular/core';
import {UpdateService} from '../../update.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.sass']
})
export class UpdatePostComponent implements OnInit {
	
  printUpdates: string;

  constructor(private updateService: UpdateService) { 
	this.printUpdates = updateService.getUpdates();
	console.log(this.printUpdates);
  }

  ngOnInit() {
  }

}
