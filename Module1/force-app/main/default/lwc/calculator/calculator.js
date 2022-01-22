import { LightningElement, api } from 'lwc';

export default class Calculator extends LightningElement {
    handleClick(){
        this.dispatchEvent(new CustomEvent('clicked'));
    }
}