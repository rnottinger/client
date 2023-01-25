import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";


interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
  updated_at: string;
}
/**
 * SecureComponent
 *   will be responsible for
 *     all the routes
 *       that need authentication
 */
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user: User = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    created_at: '',
    updated_at: ''
  };



  constructor(
      private http: HttpClient,
      private router: Router // <-- so we can route the user to the login page
  ) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    // local server
    // this.http.get<User>('http://localhost:8000/user', { headers: headers }).subscribe(

    // docker nginx server
    this.http.get<User>('http://localhost:8088/user', { headers: headers }).subscribe(
        (result: User) => this.user = result,
        error => {
          localStorage.removeItem('token');
          this.router.navigate(['/login'])
        }
        // result => console.log(result)
    );
  }
}
