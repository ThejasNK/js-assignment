let n =Number(prompt("Enter a positive interger to print its multiplication table",1));
let heading=document.getElementById("heading");
let content=document.getElementById("content");
heading.innerText+=`Multiplication table of ${n}`;
for (let i=1;i<=10;i++){
    content.innerText+=`\n ${n} x ${i} = ${n*i}`;
}

