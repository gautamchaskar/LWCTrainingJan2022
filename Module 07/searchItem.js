import { LightningElement, api } from 'lwc';
export default class SearchItem extends LightningElement {
    @api record;
    handleSelect(event) {
        const selectedEvent = new CustomEvent('selected', { detail: this.record.Id, bubbles: true  });
        this.dispatchEvent(selectedEvent);
    }
}