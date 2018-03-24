import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { AppRoutingModule } from './/app-routing.module';

import { TabsModule } from 'ngx-bootstrap';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonService } from './services/person.service';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ChartComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TabsModule.forRoot()
  ],
  providers: [
    PersonService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
