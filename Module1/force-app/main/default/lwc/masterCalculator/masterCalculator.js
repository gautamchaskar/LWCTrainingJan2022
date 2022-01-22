import { LightningElement } from 'lwc';

export default class MasterCalculator extends LightningElement {
    student = {};

    handleClick(){
        this.dispatchEvent(
            new CustomEvent('clicked2' , {detail: this.student})
        );
    }
    firstNameChange(event){
        this.student.fName = event.detail.value;

    }
    lastNameChange(event){
        this.student.lName = event.detail.value;

    }
}