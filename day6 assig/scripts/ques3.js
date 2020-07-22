let name=prompt("Enter your name...","AnonymousUser");
let heading=document.getElementById("heading");
let content=document.getElementById("content");
let body = document.querySelector('body');
heading.innerText=`Hello ${name}, welcome....!!`;
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    content.innerText=time;
}
setInterval(clock,1000);
// console.log(body.classList);
body.classList.toggle("dark-mode");
