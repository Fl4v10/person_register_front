import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { ChartComponent } from './chart/chart.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'person', component: PersonComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
