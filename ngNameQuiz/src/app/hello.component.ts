import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl:'./hello.component.html',
  styleUrls: ['./hello.component.css'],
})

export class HelloComponent  {
  clickMessage = '';
  names = [];
  
  printName() {
    this.clickMessage = this.name.toUpperCase() + ' is displayed !';
  }

  addName(newName: string) {
    // adds only the unique names
    if (this.names.indexOf(newName) === -1 && newName != '')
      this.names.push(newName);
    else if(newName == '')
      alert("Nothing to add!");
    else
      alert(this.name.toUpperCase() + " already added!");
  }

  removeName(newName: string) {
    // removes the last element in the array
    this.names.pop();
    if(this.names.length == 0){
        this.clickMessage = '';
        this.name = '';
    }
      
  }

  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();
  changeName(){
    this.name = this.names[Math.floor(Math.random()*this.names.length)];
    this.printName();
    //this.nameChange.emit(this.name);
    // console.log(this.nameChange.emit(this.name));
  }

}