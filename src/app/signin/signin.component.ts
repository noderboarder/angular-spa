import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInfo = (signInForm: NgForm) => {
    console.log(signInForm);
    console.log(signInForm.value.exampleInputEmail1);
    console.log(signInForm.value.exampleInputPassword1);
    console.log(signInForm.value.exampleCheck1);
  }
}
