import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { PersonModel } from '../models/person.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  listPeople: PersonModel[];
  person: PersonModel;
  pageSize = 10;

  constructor(
    private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    return this.personService.getPeople(null, this.pageSize)
      .subscribe(data => {
        this.listPeople = data as PersonModel[];
      });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(resp => {
      this.getPeople();
    });
  }

}
