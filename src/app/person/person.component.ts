import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  edit = true;
  sub;
  constructor(private _route: Router,
    private route: ActivatedRoute,
    private _service: PersonService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; 
   });
  }

  editForm() {
    return !this.edit;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      return this._service.insertPerson(form.value).subscribe(resp => {
          this._route.navigate(['/people']);
      });
    }
  }
}
