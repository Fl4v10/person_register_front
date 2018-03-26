import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PeopleComponent } from './people/people.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'person', component: PersonComponent },
  { path: 'people', component: PeopleComponent },
  { path: '',   redirectTo: '/person', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
