import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient:HttpClient) { 
    console.log("Data service is invoked!");
  }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/');
  }
}
