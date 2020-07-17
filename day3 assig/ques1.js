let num=Number(prompt("Enter a number:",0));
function odd_even(num){
    if(num%2==0){
        return 'even';
    }
    else{
        return 'odd';
    }
    
}
let result=odd_even(num);
console.log(`The number entered is ${num}  and Number is ${result}`);