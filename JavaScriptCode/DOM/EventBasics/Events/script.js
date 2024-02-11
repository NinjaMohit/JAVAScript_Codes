let btn1=document.querySelector("button");
console.log(btn1);
/*
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}

let div=document.querySelector("div");
div.onmouseover=(e)=>{
    console.log("your are iside div ");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);

}

btn1.addEventListener("click",(evt)=>{
console.log("button was clicked");
console.log(evt);
});

btn1.addEventListener("click",()=>{
    console.log("button was clicked 2 again");
});

const handler3=()=>{
    console.log("button was clicked 3again");
};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log("button was clicked 4 again");
});

btn1.removeEventListener("click",handler3);

*/

btn1=document.querySelector("#btn1");
console.log(btn1);

btn1.onclick=(e)=>{
    console.log("helloooo");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}

let div=document.querySelector("div");


const moh=()=>{
    console.log("hiiiiii");
}
div.addEventListener("click",moh);
