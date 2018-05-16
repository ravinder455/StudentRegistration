import {Component, OnInit, ViewChild} from '@angular/core';
import {Registration, Student} from '../model/registration.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-student-registration-component',
  templateUrl: './student-registration-component.component.html',
  styleUrls: ['./student-registration-component.component.css']
})
export class StudentRegistrationComponentComponent implements OnInit {

  student; Student = new Student('', '', '', null);
  registration: Registration = new Registration('', '', '', '',
    null, '', '', '', null);
  months;
  days: number[] = new Array();
  years: number[] = new Array();
  eduOptions;
  // @ViewChild('registrationForm') registrationForm: NgForm;

  constructor() { }

  ngOnInit() {
    this.registration.student = this.student;
    for (let i = 2018; i > 1918; i--) {
      this.years.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      this.days.push(i);
    }
    this.months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
      'October', ' November', 'December'];

    this.eduOptions = ['Middle School', '9th Grade', '10th Grade', '11th Grade', '12th Grade',
      'Completed HS; not yet enrolled in college', 'Completed HS; will not attend college',
      'Currently Enrolled in College', 'College Graduate', 'Other'];
  }

}
