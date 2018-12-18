import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
  this.employeeForm = new FormGroup({
  fullName: new FormControl(),
  email: new FormControl(),
  
  skills: new FormGroup({
  skillName: new FormControl(),
  experienceInYears: new FormControl(),
  proficiency: new FormControl()
  })
  });
  }
  
  onSubmit(): void {
  console.log(this.employeeForm);
  }

}


