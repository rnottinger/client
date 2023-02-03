import {Component, OnInit, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  cols? = '3';
  displayMap = new Map([
      [Breakpoints.XSmall, '1'],
      [Breakpoints.Small, '1'],
      [Breakpoints.Medium, '2'],
      [Breakpoints.Large, '3'],
      [Breakpoints.XLarge, '3'],
  ]);
  @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor(
        private breakpointObserver: BreakpointObserver
    ) {
        breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
            ]).subscribe(result => {
                // console.log(result);
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        this.cols = this.displayMap.get(query);
                    }
                }
            });
    }

  ngOnInit(): void {
  }
}
