 let n = Math.abs(parseInt(prompt("Enter a positive number...")));
 let arrNum=[];
 for (let i=1;i<=n;i++){
     arrNum.push(i);
 }
let  arrOdd=arrNum.filter(i=>i%2!=0);
let arrCubes=arrOdd.map(i=> i**3);
console.log(arrCubes);
