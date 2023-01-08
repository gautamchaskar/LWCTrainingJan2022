import { LightningElement } from 'lwc';

export default class Iterator extends LightningElement {
    employees = [
        {Id: 'EMP-101', Name: 'Gautam Chaskar', Email: 'Gautam@ust.com'},
        {Id: 'EMP-102', Name: 'Manoj Mahajan', Email: 'Manoj@ust.com'},
        {Id: 'EMP-103', Name: 'Shruti Sawant', Email: 'Shruti@ust.com'},
        {Id: 'EMP-104', Name: 'Akash Modhave', Email: 'Akash@ust.com'},
        {Id: 'EMP-105', Name: 'Ganesh Gorde', Email: 'Ganesh@ust.com'},
        {Id: 'EMP-106', Name: 'Deepak Korde', Email: 'Deepak@ust.com'},
    ];
}