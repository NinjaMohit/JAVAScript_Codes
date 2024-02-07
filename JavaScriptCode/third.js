/*let btn=document.getElementById("btn1");
btn1.onclick=(e)=>{
    console.log(e);
    console.log("btn1 was clicked by mm");
    let a=25;a++;
    console.log(a);
    
};

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
};*/

/*btn1.addEventListener("click",(e)=>{
console.log("button was click");
console.log(e);
});

btn1.addEventListener("click",()=>{
    console.log("button was click by mm")
    });
    */

let btn=document.querySelector("#mybtn");
   
btn.addEventListener("click",(e)=>{
    console.log(e);
      console.log("button1 was clicked -handler1");
    });

    btn.addEventListener("click",()=>{
      console.log("button2 was clicked -handler2");
    });
    
    btn.addEventListener("click",()=>{
        console.log("button3 was clicked -handler3");
      });
  
    btn.addEventListener("click",()=>{
        console.log("button4 was clicked -handler4");
      });