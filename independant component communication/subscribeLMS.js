import { LightningElement, wire } from 'lwc';
import {createMessageContext, MessageContext, releaseMessageContext, subscribe, unsubscribe} from 'lightning/messageService';
import conCreated from '@salesforce/messageChannel/conCreated__c';
export default class SubscribeLMS extends LightningElement {
    @wire(MessageContext) messageContext;
    subscription = null;
    messages = [];
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                conCreated,
                (message) => this.handleMessage(message),
                // { scope: APPLICATION_SCOPE }
            );
        }
    }
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    handleMessage(message) {
        this.messages = [...this.messages, message.contact];
    }
    handleClear(){
        this.messages = null;
    }
}