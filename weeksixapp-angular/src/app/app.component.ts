import { Response } from '@angular/http';
import { WeeksixService } from './services/weeksix.services';
import WeekSix from './models/weeksix.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    
    private weeksixService: WeeksixService
  ) { }


  public newWeeksix: WeekSix = new WeekSix()


  weeksixsList: WeekSix[];


  ngOnInit(): void {

    this.weeksixService.getWeekSixs()
      .subscribe(weeksixs => {

        this.weeksixsList = weeksixs
        console.log(weeksixs)
      })
  }
}