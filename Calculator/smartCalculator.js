import { LightningElement } from 'lwc';
export default class SmartCalculator extends LightningElement {
    expression = ''; result =0;
    handleAddition(){
        if( this.expression.charAt(this.expression.length-1) == '+' || 
            this.expression.charAt(this.expression.length-1) == '-' || 
            this.expression.charAt(this.expression.length-1) == '*' || 
            this.expression.charAt(this.expression.length-1) == '/'){
                this.expression = this.expression.substring(0, this.expression.length - 1);
        }
        this.expression += (this.expression.length > 0) ? '+' : '';
    }
    handleSubstraction(){
        if( this.expression.charAt(this.expression.length-1) == '+' || 
            this.expression.charAt(this.expression.length-1) == '-' || 
            this.expression.charAt(this.expression.length-1) == '*' || 
            this.expression.charAt(this.expression.length-1) == '/'){
                this.expression = this.expression.substring(0, this.expression.length - 1);
        }
        this.expression += (this.expression.length > 0) ? '-' : '';
    }
    handleMultiply(){
        if( this.expression.charAt(this.expression.length-1) == '+' || 
            this.expression.charAt(this.expression.length-1) == '-' || 
            this.expression.charAt(this.expression.length-1) == '*' || 
            this.expression.charAt(this.expression.length-1) == '/'){
                this.expression = this.expression.substring(0, this.expression.length - 1);
        }
        this.expression += (this.expression.length > 0) ? '*' : '';
    }
    handleDivision(){
        if( this.expression.charAt(this.expression.length-1) == '+' || 
            this.expression.charAt(this.expression.length-1) == '-' || 
            this.expression.charAt(this.expression.length-1) == '*' || 
            this.expression.charAt(this.expression.length-1) == '/'){
                this.expression = this.expression.substring(0, this.expression.length - 1);
        }
        this.expression += (this.expression.length > 0) ? '/' : '';
    }
    handleClr(){
        this.expression = '';
        this.result     = ''
    }
    handleEquals(){
        if( this.expression.charAt(this.expression.length-1) == '+' || 
            this.expression.charAt(this.expression.length-1) == '-' || 
            this.expression.charAt(this.expression.length-1) == '*' || 
            this.expression.charAt(this.expression.length-1) == '/'){
                this.expression = this.expression.substring(0, this.expression.length - 1);
        }
        this.result = eval(this.expression);
    }
    handleBackspace(){
        this.expression = this.expression.substring(0, this.expression.length - 1);
    }
    handleClick1(){
        this.expression += 1;
    }
    handleClick2(){
        this.expression += 2;
    }
    handleClick3(){
        this.expression += 3;
    }
    handleClick4(){
        this.expression += 4;
    }
    handleClick5(){
        this.expression += 5;
    }
    handleClick6(){
        this.expression += 6;
    }
    handleClick7(){
        this.expression += 7;
    }
    handleClick8(){
        this.expression += 8;
    }
    handleClick9(){
        this.expression += 9;
    }
    handleClick0(){
        this.expression += 0;
    }
    removeExtraOperations(){
        if( this.expression.charAt(this.expression.length-1) == '+' || 
            this.expression.charAt(this.expression.length-1) == '-' || 
            this.expression.charAt(this.expression.length-1) == '*' || 
            this.expression.charAt(this.expression.length-1) == '/'){
                this.expression = this.expression.substring(0, this.expression.length - 1);
        }
        this.expression = 'test' + this.str;
    }
}