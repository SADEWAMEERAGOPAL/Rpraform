import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './const/validationpatten';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Rpraform';
  Signupform!: FormGroup;


  ngOnInit(): void {
    this.Signupform=new FormGroup({
      UserName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern(CustomRegex.onlyText)], []) ,
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)], [])
     
    })
     console.log(this.Signupform)
  }

  OnSignUp(){
   console.log(this.Signupform)
   }

   get formControls(){
    return this.Signupform.controls
   }
  
}
