import { Component, OnInit } from '@angular/core';
import { ConfigService } from "./core/services/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'client';

  constructor(
      private configService: ConfigService
  ) {
    // console.log('this is my setting: ' + JSON.stringify(this.configService.config));
  }

  ngOnInit(): void {

  }

}
