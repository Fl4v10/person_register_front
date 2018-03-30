import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PersonModel } from '../models/person.model';
import { AddressModel } from '../models/address.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  private url = environment.personAPI;
  person = new PersonModel({});

  constructor(private _http: HttpClient) {
  }

  getPerson(id: number) {
    return this._http.get(this.url + '/' + id);
  }

  getPeople(search: string) {
    const url = this.url + '?search=' + search;
    return this._http.get(url, { headers: this.createHeaders() });
  }

  deletePerson(id: number) {
    const url = this.url + '/' + id;
    return this._http.delete(url);
  }

  insertPerson(form: any) {
    const person: PersonModel = this.createBody(form);
    return this._http.post(this.url, person, { headers: this.createHeaders() });
  }

  updatePerson(person: PersonModel) {
    return this._http.put(this.url, person, { headers: this.createHeaders() });
  }

  createBody(model: any): PersonModel {
    const person = new PersonModel(model);
    person.address = new AddressModel({});
    person.address.number = model.Number;
    person.address.name = model.Address;
    person.address.complement =  model.Complement;

    return person;
  }

  createHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('access-control-allow-origin', '*');
    headers.append('Content-Type', 'application/json');

    return headers;
  }

}
