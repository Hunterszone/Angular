import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'hello',
  templateUrl:'./hello.component.html',
  styleUrls: ['./hello.component.css'],
  animations: [
    trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 1000ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('changeDivSize', [
      state('initial', style({
        color: 'white',
        backgroundColor: 'green',
        width: '100px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '25px',
        margin: 'auto'
      })),
      state('final', style({
        color: 'white',
        backgroundColor: 'red',
        width: '100px',
        height: '30px',
        border: '1px solid black',
        borderRadius: '25px',
        margin: 'auto'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ])
  ]
})

export class HelloComponent  {
  clickMessage = '';
  names = [];
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
  
  printName() {
    if(this.names.length != 0)
      this.clickMessage = this.name.toUpperCase() + ' was added !';
  }

  addName(newName: string) {
    // adds only the unique names
    if (this.names.indexOf(newName) === -1 && newName != '')
      this.names.push(newName);
    else if(newName == '')
      alert("Nothing to add!");
    else
      alert(this.name.toUpperCase() + " already added!");
    this.currentState = 'final';
  }

  removeName(newName: string) {
    // removes the last element in the array
    this.names.pop();
    if(this.names.length == 0){
        this.clickMessage = '';
        this.name = 'Unknown';
    }
   this.currentState = 'final';
      
  }

  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();
  shuffleNames(){
    if(this.name != '')
      this.name = this.names[Math.floor(Math.random()*this.names.length)];
    if(this.names.length == 0){
        this.clickMessage = '';
        this.name = 'Unknown';
    }
    this.printName();
    //this.nameChange.emit(this.name);
    // console.log(this.nameChange.emit(this.name));
  }

}