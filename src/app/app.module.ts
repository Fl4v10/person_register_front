import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonService } from './services/person.service';
import { PeopleComponent } from './people/people.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartComponent } from './people/chart/chart.component';
import { ChartModule } from 'angular-highcharts';
import { PersonFilter } from './people/person-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleComponent,
    ChartComponent,
    PageNotFoundComponent,
    PersonFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [
    PersonService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
