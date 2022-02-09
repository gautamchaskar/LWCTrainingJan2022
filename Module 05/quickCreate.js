import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class QuickCreate extends LightningElement {
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    viewAllAccFields = false; accLabel = 'View All Fields';
    viewAllOppFields = false; oppLabel = 'View All Fields';
    viewAllConFields = false; conLabel = 'View All Fields';
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Record' +' created',
            message: 'Record Id {1}',
            messageData: [
                'Salesforce',
                {
                    url: 'https://ust-1f2-dev-ed.lightning.force.com/'+event.detail.id,
                    label: event.detail.id
                }
            ],
            variant: 'success',
        });
        this.dispatchEvent(evt);
        // handleReset();
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
            element.reset();
        });
    }
    handleAccFields() {
        this.viewAllAccFields = (this.viewAllAccFields == true) ? false : true;
        this.accLabel = (this.accLabel == 'View All Fields') ? 'Hide All Fields' : 'View All Fields';
    }
    handleConFields() {
        this.viewAllConFields = (this.viewAllConFields == true) ? false : true;
        this.conLabel = (this.conLabel == 'View All Fields') ? 'Hide All Fields' : 'View All Fields';
    }
    handleOppFields() {
        this.viewAllOppFields = (this.viewAllOppFields == true) ? false : true;
        this.oppLabel = (this.oppLabel == 'View All Fields') ? 'Hide All Fields' : 'View All Fields';
    }
    handleReset(){
        const fields = this.template.querySelectorAll('lightning-input-field');
        fields.forEach(element => {
            element.reset();
        });
    }
}