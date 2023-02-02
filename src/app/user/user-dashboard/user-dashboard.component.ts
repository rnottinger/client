import {Component, OnInit, Version, VERSION} from '@angular/core';
import {Title} from "@angular/platform-browser";

import {User} from "../../../../projects/authentication/src/lib/models/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LoggerService} from "../../core/services/logger.service";
import {DataService} from "../../core/services/data.service";
import {IBook} from "../../shared/models/book";
import {IReader} from "../../shared/models/reader";
import {NotificationService} from "../../core/services/notification.service";

@Component({
  selector: 'abc-user-dashboard',
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


  allBooks: IBook[] | undefined;
  allReaders: IReader[] | undefined;
  mostPopularBook: IBook | undefined;




  constructor(
      private http: HttpClient,
      private router: Router, // <-- so we can route the user to the login page
      private loggerService: LoggerService,
      private dataService: DataService,
      private title: Title,
      private notificationService: NotificationService

  ) {
    // this.loggerService.log('Creating the UserDashboardComponent');
    // this.loggerService.trace('stack trace');

    // throw new Error('Ugly Technical Error');
  }

  ngOnInit(): void {
    // Best practice: Initialize the data for a component in the ngOnInit lifecycle hook
    // use a service to get data from the server
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;

    /**
     * 1. Import the DataService into the UserDashboardComponent
     * 2. Inject the DataService into the constructor
     * 3. Call the DataService methods to get the data that was assigned to properties on the component
     */


    this.title.setTitle(`User Dashboard - ${VERSION.full}`);

    // this.notificationService.showSuccess('Welcome to the User dashboard', 'X');
    this.notificationService.showError('Error');


    // local server
    this.http.get<User>('http://localhost:8000/user')

        // docker nginx server)
    // this.http.get<User>('http://localhost:8088/user')
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
