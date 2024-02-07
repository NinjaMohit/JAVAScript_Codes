//Promises In JS
/*
let promise=new Promise((resolve,reject)=>{
    console.log("I am a promise");
   // resolve("success");
   reject("some error");
});


function getData(dataId,getNextData){
return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       console.log("data",dataId);
       resolve("success");
       if(getNextData){
           getNextData();
       }
      },5000);

});
}

//promise.then and promise.catch
const getPromise=()=>{
return new Promise((resolve,reject)=>{
   console.log("I am a promise");
   resolve("success");
  // reject("error");
});
};

let promise=getPromise();
promise.then((res)=>{
console.log("promise fulfillled",res);
});

promise.catch((err)=>{
console.log("promise not fulfillled");
});*/

/*
//Promise chaining

function asyncFunc1(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
  console.log("some data1");
  resolve("success");
  },4000);
});
}

function asyncFunc2(){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
  console.log("some data1");
  resolve("success");
  },4000);
});
}

console.log("fectching data1");
//let p1=asyncFunc1();
asyncFunc1().then((res)=>{
console.log(res);
console.log("fetching data2....");

//  let p2=asyncFunc2();
asyncFunc2().then((res)=>{
   console.log(res);
})
})
*/
//Promise chain
function getData(dataId,getNextData){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
   console.log("data",dataId);
   resolve("success")
   if(getNextData){
   getNextData();
   }
},5000); 
});
}

//let p1=getData(1);
/*
getData(1).then((res)=>{
console.log(res);
getData(2).then((res)=>{
console.log(res);

});
});
*/
console.log("getting data1 ..");
getData(1).then((res)=>{
console.log("getting data2 ..");
return getData(2);
}).then((res)=>{
console.log("getting data3 ..");
return getData(3);
}).then((res)=>{
console.log(res);
});
