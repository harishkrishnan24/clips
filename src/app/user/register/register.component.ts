import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showAlert = false;
  alertMessage = 'Please wait! Your account is being created';
  alertColor = 'blue';

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [Validators.required, Validators.min(18), Validators.max(120)]);
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/gm)]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]);

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  });

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    this.showAlert = true;
    this.alertMessage = 'Please wait! Your account is being created';
    this.alertColor = 'blue';
  }

}
