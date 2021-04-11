import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  
  getComments(): string{
	  return "CommentService works!"
  }
}
