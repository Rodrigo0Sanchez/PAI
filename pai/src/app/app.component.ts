import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
  private http: HttpClient) { }

  title = 'pai';

  url = 'https://3000-edccdc2a-582c-4ad9-8348-124af2af522e.ws-eu01.gitpod.io/';

  a = this.http.get<JSON>(this.url);
}
