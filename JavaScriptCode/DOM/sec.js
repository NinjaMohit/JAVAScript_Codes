/*let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);


let p=document.querySelector("p");
console.log(p);

let para=p.getAttribute("Class");
console.log(para);

console.log(p.setAttribute("class","newclass"));


let div=document.querySelector("div");
console.log(div);
div.style.backgroundColor="green";
div.style.backgroundColor="yellow"

div.style.fontSize="30px";

div.innerText="hello";

let newBtn=document.createElement("button");
newBtn.innerText="click me";

let div=document.querySelector("div");
div.append(newBtn);

div.prepend(newBtn);

div.before(newBtn);*/




let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi am new</i>";

document.querySelector('body').prepend(newHeading);