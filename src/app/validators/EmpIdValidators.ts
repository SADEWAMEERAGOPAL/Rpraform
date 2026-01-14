import { AbstractControl, ValidationErrors} from "@angular/forms";

export class EmpIdValidator{
    static isEmpIdValid(control: AbstractControl):ValidationErrors| null{
         let val: string=control.value
           console.log(val)
           if(!val){
              return null
           }
        
           //EmpId

           let regExp=/^[A-Z]\d{3}$/

           let isValid =regExp.test(val)
           
           if(isValid){
            return null
           }else{
            return {
                invalid: 'invalid EmpId Please Enter like (E123)'
            }
           }
          
    }
}