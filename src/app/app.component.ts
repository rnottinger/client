import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn = false;
  ngOnInit(): void {
    /**
     * this means we are logged in
     *   if we have a token in localStorage
     */
    this.loggedIn = localStorage.getItem('token') !== null
  }

  logout() {
    localStorage.removeItem('token');
    // this.loggedIn = false;
  }
}
