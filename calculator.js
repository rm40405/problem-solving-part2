
function add(num1,num2){
    return num1 + num2;

}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}


function calculator(a,b,oparetor){
    if(oparetor === "+"){
        const result = add(a,b);
        return result;
    }
    else if(oparetor === "-"){
        return subtract(a,b);
    }
    else if(oparetor === "*"){
        return multiply(a,b);
    }
    else if(oparetor === "/"){
        return divide(a,b);
    }
}
const result = calculator(2,3,"*");
console.log(result);
   
