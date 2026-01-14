import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpaceBaValidators{
    static noSpace(control: AbstractControl): ValidationErrors| null{
       let val: string=control.value
       console.log(val)

       if(!val){
            return null
       }
       if(val.includes(' ')){
         return {
            NoSpaceBar : `Spacebar is not Allowed`
         }

       }else{
        return null
       }
       
    }
}


//error=validatorError||null