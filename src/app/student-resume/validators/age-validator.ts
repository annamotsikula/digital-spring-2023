import { AbstractControl } from "@angular/forms";

export function ageValidator(control: AbstractControl): null | { [key: string] : boolean} {
    if(control.value < 18 || control.value >= 65 ) {
        return { ageNotFit: true }
    }
    return null
}

//

/* 

{
    required: true,
    email: true,

}
*/