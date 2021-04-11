import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
	
  constructor(){}
  
  getPostCreated(): string{
	  return 'CreateService works!';
  }
}
