import {Component, OnInit} from '@angular/core';
import {User} from "../../../projects/authentication/src/lib/models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    password: '',
    token: '',
    email: '',
    created_at: '',
    updated_at: ''
  };



  constructor(
      private http: HttpClient,
      private router: Router // <-- so we can route the user to the login page
  ) { }

  ngOnInit(): void {
    // local server
    // this.http.get<User>('http://localhost:8000/user')

        // docker nginx server)
    this.http.get<User>('http://localhost:8088/user')
        .subscribe(
        (result: User) => this.user = result,
        error => {
          localStorage.removeItem('token');
          this.router.navigate(['login'])
        }
        // result => console.log(result)
    );
  }
}
