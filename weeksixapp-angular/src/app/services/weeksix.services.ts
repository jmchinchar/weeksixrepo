import WeekSix from '../models/weeksix.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class WeeksixService {

  api_url = 'http://localhost:3000';
  weeksixUrl = `${this.api_url}/api/weeksixs`;

  constructor(
    private http: HttpClient
  ) { }


createWeeksix(weeksix: WeekSix): Observable<any>{
    
    return this.http.post(`${this.weeksixUrl}`, weeksix);
  }

getWeekSixs(): Observable<WeekSix[]>{
    return this.http.get(this.weeksixUrl)
    .pipe(map(res  => {
        
      return res["data"].docs as WeekSix[];
    }))
  }

editWeeksix(weeksix:WeekSix){
    let editUrl = `${this.weeksixUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, weeksix);
  }

deleteWeeksix(id:string):any{
    let deleteUrl = `${this.weeksixUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 

    return Promise.reject(error.message || error);
  }





}