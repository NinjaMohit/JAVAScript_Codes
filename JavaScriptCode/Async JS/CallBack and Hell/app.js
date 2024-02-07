//SetTime Out function 
/*
function hello(){
    console.log("hello");
}
setTimeout(hello,2000);

setTimeout(()=>{
    console.log("hello");
},4000);
-----------------------------------------------------------

//Async
console.log("one");
console.log("two");
function hello(){
    console.log("hello");
}
setTimeout(hello,2000);

setTimeout(()=>{
    console.log("hello");
},4000);
console.log("three");
console.log("four");
-----------------------------------------------------------------

//CallBack function
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(2,3,sum);


calculator(1,2,(a,b)=>{
    console.log(a+b);
});

const hello=()=>{
    console.log("hello");
};
setTimeout(hello,4000);


//CallBack Hell
function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId);
    },2000); 
}
getData(1);
getData(2);
getData(3);

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
    },2000); 
}

getData(0);
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});


*/
