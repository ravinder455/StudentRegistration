import {Component, OnInit, ViewChild} from '@angular/core';
import {Registration} from '../model/registration.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-student-registration-component',
  templateUrl: './student-registration-component.component.html',
  styleUrls: ['./student-registration-component.component.css']
})
export class StudentRegistrationComponentComponent implements OnInit {

  registration: Registration = new Registration('', '', '', '',
    null, '', '', '');

  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', ' November', 'December'];
  days: number[] = new Array();
  years: number[] = new Array();
  // @ViewChild('registrationForm') registrationForm: NgForm;

  constructor() { }

  ngOnInit() {
    for (let i = 2018; i > 1918; i--) {
      this.years.push(i);
    }
    for (let i = 1; i <= 31; i--) {
      this.days.push(i);
    }
  }

}
