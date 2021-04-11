import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor() { }

  getPostDeleted(): string{
	  return "DeleteService works!";
  }
}
