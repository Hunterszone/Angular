import { Component, OnInit } from '@angular/core';

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
  
  constructor() { 
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

  ngOnInit(): void {
  }

}

interface Address {
  street: string;
  city: string;
  country: string;
}