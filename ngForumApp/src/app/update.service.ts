import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }
  
  getUpdates(): string{
	  return "UpdateService works!";
  }
}
