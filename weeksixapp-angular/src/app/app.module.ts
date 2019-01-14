import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeeksixService } from './services/weeksix.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    WeeksixService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
