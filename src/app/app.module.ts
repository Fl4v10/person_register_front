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

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleComponent,
    ChartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PersonService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
