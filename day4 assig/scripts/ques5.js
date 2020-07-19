let sales =Number(prompt("Enter the number of sales made during the year...",0));
let reward;
switch(true){
    case(sales<=5000):
        reward=sales*0.02;
        break;

    case(sales>=5001 && sales<=10000):
        reward=(5000*0.02)+((sales-5000)*0.05);
        break;
    
    case(sales>=10001 && sales<=20000):
        reward=(5000*0.02)+((10000)*0.05)+((sales-10000)*0.07);
        break;
    
    case(sales>=20001):
        reward=(5000*0.02)+(10000*0.05)+(20000*0.07)+((sales-20000)*0.1);
        break;
    
    default:
        reward="INVALID ENTRY!!";
        break;
    
}
console.log(    1reward);