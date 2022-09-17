import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  public posts: Observable<any>;
  public sResponse: boolean;

  constructor(private http: HttpClient) {}

  getPosts() {
    this.sResponse = true;
    this.posts = this.http.get(this.ROOT_URL + '/posts?userId=1');
  }
}
