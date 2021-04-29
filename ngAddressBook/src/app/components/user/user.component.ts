import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: any;
  isEdit: boolean = false;
  
  constructor(private dataService:DataService, private router:Router) { 
    console.log("User constructor is invoked!");
  }

  addHobby(hobby: string) {  
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(hobby: string) {  
    for(let i = 0; i < this.hobbies.length; i++) {
      if(hobby == this.hobbies[i]) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  openAbout() {
    this.router.navigate(['/about']);
  }

  ngOnInit(): void {
    this.firstName = "Ivan";
    this.lastName = "Petrov";
    this.age = 30;
    this.email = "test@gmail.com";
    this.address = {
      street: "Yundola Str.",
      city: "Sofia",
      country: "Bulgaria"
    }
    this.hobbies = ["Skiing", "Coding", "Watching movies"];
    this.dataService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}

interface Address {
  street: string;
  city: string;
  country: string;
}

interface Post {
  id: number,
  userId: number,
  title: string,
  body: string
}