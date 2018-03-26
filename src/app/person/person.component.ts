import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { PersonModel } from '../models/person.model';
import { AddressModel } from '../models/address.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: any;
  personId: number;

  constructor(private _route: Router,
    private _activateRoute: ActivatedRoute,
    private _service: PersonService) {}

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      this.personId = +params['id'];
      this.getPesonToUpdate(this.personId);
   });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.personId) {
        return this.updatePerson();
      }

      return this.insertPerson(form);
    }
  }

  clearForm() {
    this.personId = 0;
    this.person = new PersonModel({});
    this.person.address = new AddressModel({});
  }

  private updatePerson() {
    return this._service.updatePerson(this.person).subscribe(resp => {
      this._route.navigate(['/people']);
    });
  }

  private insertPerson(form: NgForm) {
    return this._service.insertPerson(form.value).subscribe(resp => {
      this._route.navigate(['/people']);
    });
  }

  private getPesonToUpdate(id: number) {
    this._service.getPerson(id).subscribe(data => {
      this.person = data ? data as PersonModel : new PersonModel({});
      this.person.address = this.person.address ? this.person.address : new AddressModel({});
      this.person.birthDate = this.person.birthDate = new Date(this.person.birthDate).toISOString().split('T')[0];
    });
  }
}
