alert("Calculator");
alert("+ for addition, - for subtraction, * for multiplication, / for division, <number>root for square root and % for modulous ");
let toCalculate=prompt('Enter the operation you want to perform...enter the numbers and the symbol separated by a SPACE....:)....ex: "1 + 2" ');
let result;
let operation=toCalculate.split(' ');
let [n1,symbol,n2]=operation;
switch (symbol){
    case '+':
        result=Number(n1)+Number(n2);
        break;
    case '-':
        result=Number(n1)-Number(n2);
        break;
    case '*':
        result=Number(n1)*Number(n2);
        break;
    case '/':
        result=Number(n1)/Number(n2);
        break;
    case '%':
        result=Number(n1)%Number(n2);
        break;
    case 'root':
        result=Math.sqrt(Number(n1));
        break;
    default:
        result="INVALID ENTRY!!";
        console.log('Enter the operation you want to perform...enter the numbers and the symbol separated by a SPACE....:)');
        console.log("+ for addition, - for subtraction, * for multiplication, / for division, <number> root for square root and % for mod ");
}
        

console.log(result);
