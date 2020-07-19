let num =Number(prompt("Enter the value of n...",'2'));
let primes=[];
 function primeChecker(n){
    let key=0;
    for(let i=2;i<n;i++){
        if (n%i==0){
            key=1;
            break;
        }
    }
    if(key==0){
        return n;
    }
 }
 function display(num){
    for(let i=2;i<=num;i++){
    let prime=primeChecker(i);
    primes.push(prime);
    }
 }
 display(num);
 //removing all undefined values in the array 
 primes=primes.filter(
    function(element){
        return element!==undefined;
    }
)
 console.log(primes);