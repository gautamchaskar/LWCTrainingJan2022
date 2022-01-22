import { LightningElement } from 'lwc';
exampleName = 'Sample Example';
export default class MainApplication extends LightningElement {
    eventName;
    handleButtonClick(event){
        this.eventName = 'Child Button Clicked';
        this.exampleName = 'Handle Change From First Component'
    }

    handleButtonClick2(event){
        this.eventName = '' + event.detail.fName + event.detail.lName;
        this.exampleName = 'Handle Change From Second Component'

    }
}