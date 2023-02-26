import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-react-form',
  templateUrl: './demo-react-form.component.html',
  styleUrls: ['./demo-react-form.component.css']
})
export class DemoReactFormComponent implements OnInit {
  loginForm!: FormGroup;
  message!: string;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      useremail: new FormControl('',[Validators.required,Validators.email]),
      userpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submitLoginForm(){
    if(this.loginForm.valid){
      this.message = "Form Submitted Successfuly";
    }
    
  }

}
