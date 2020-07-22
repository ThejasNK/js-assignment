let colors=['pink','red','yellow','blue','green','purple'];
var body=document.querySelector('body');
body.style.background='purple'
let i = 0;
let startColorChange=()=> {
 setInterval(()=> {
    body.style.backgroundColor = colors[i]
    i = (i + 1) % colors.length;
   },5000)
}
startColorChange();
