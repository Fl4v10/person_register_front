import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PersonService {

  constructor(private _http: HttpClient) { }

  private url = 'localhost:8090/person';

  getPeople() {
    return this._http.get(this.url);
  }

  getPerson(search: string, pageSize:  Number) {
    const url = this.url + '?search=' + search + '&pageSize=' + pageSize;
    return this._http.get(url);
  }

  deletePerson(id: number) {
    const url = this.url + '/' + id;
    return this._http.delete(url);
  }

  insertPerson(person: any) {
    return this._http.post(this.url, person);
  }

  updatePerson(person: any) {
    return this._http.post(this.url, person);
  }
}
