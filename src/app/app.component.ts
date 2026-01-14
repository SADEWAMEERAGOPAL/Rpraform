import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './const/validationpatten';
import { EmpIdValidator } from './validators/EmpIdValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Rpraform';
  Signupform!: FormGroup;

  genderArr: Array<string>=[
    "Female", "Male", "Other"
  ]

  ngOnInit(): void {
    this.Signupform=new FormGroup({
      UserName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern(CustomRegex.onlyText)], []) ,
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)], []),
      emp_id: new FormControl(null, [Validators.required, EmpIdValidator.isEmpIdValid], []),
      AdharNum: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.AdharCard), Validators.minLength(12), Validators.maxLength(12)]),
      PanCard: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.pancard)]),
      gender: new FormControl("Female", [], []),
      Skills: new FormArray([new FormControl('js', [Validators.required])]),
     
    })
     console.log(this.Signupform)
  }

  OnSignUp(){
    if(this.Signupform.valid){
       console.log(this.Signupform)
    }
   
   }

   get formControls(){
    return this.Signupform.controls
   }

   
  get UserName() {
    return this.Signupform.get('UserName') as FormControl
  }

  get skillsArr(){
    return this.Signupform.get('Skills')as FormArray
  }


 OnSkillAdd(){
  if(this.skillsArr.valid&& this.skillsArr.length< 5){
   this.skillsArr.push(new FormControl(null, [Validators.required]))
  }
 }

 OnRemoveskill(i: number){
//    this.skillsArr.splice(i, 1)
console.log(i)
   this.skillsArr.removeAt(i)
 }
  
}
