import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { PersonModel } from '../models/person.model';
import { ActivatedRoute } from '@angular/router';
import { PersonFilter } from './person-array.pipe';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  list: PersonModel[];
  person: PersonModel;
  filterArg: string;

  constructor(
    private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    return this.personService.getPeople(null)
      .subscribe(data => {
        this.list = data as PersonModel[];
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].age = this.calculateAge(new Date(data[i].birthDate));
        }
      });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(resp => {
      this.getPeople();
    });
  }

  searchPeople(form: any) {
    return this.filterArg = form.value.name;
  }

  private calculateAge(bday): number {
    if (bday) {
      const timeDiff = Math.abs(Date.now() - bday);
      return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
  }
}
