/*function hello(){
    console.log("hello");
}
setTimeout(hello,2000);


setTimeout(()=>{
    console.log("hi");
},4000);



console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("three");
},4000)

console.log("four");
console.log("five");

//CallBack


function mul(a,b){
    console.log(a*b);
}
function calculator(a,b,mulCallBack){
    mulCallBack(a,b);
}
calculator(2,3,mul);

const hello=()=>{
    console.log("hello");
}
setTimeout(hello,3000);
*/

/*
function getData(dataId,getNextData){
setTimeout(()=>{
    console.log("data",dataId);

    if(getNextData){
    getNextData();
    };

},2000);
}
//Callback hell
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});


function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log(dataId);
        if(getNextData){
            getNextData();
        }
    },3000);
};

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    })
});



let promise=new Promise((resolve,reject)=>{
    console.log("i am promise");
    reject("some error");
});

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },3000);
    });
}
//then catch

const getPromise=()=>{
    return new Promise((resolve,reject)=>{
      console.log("i am promises");
      //resolve("success");
      reject(" network error");
});
};
let promise=getPromise();

promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
})

//Promise Chaining


function asyncFunc1(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      console.log(" data 1");
      resolve("success");
     },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
      console.log(" data 2");
      resolve("success");
     },4000);
    });
}
*/
/*
console.log("fecting data1");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
});

console.log("fecting data2");
let p2=asyncFunc2();
p2.then((res)=>{
    console.log(res);
});



console.log("fecthing data1.......");
let p1=asyncFunc1();
p1.then((res)=>{
    console.log("fetching data2.......");
    let p2=asyncFunc2();
    p2.then((res)=>{
        
    });
});

console.log("fecthing data1.......");
asyncFunc1().then((res)=>{
    console.log("fetching data2.......");
    asyncFunc2().then((res)=>{s
    });
});


function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}


getData(1).then((res)=>{
return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
console.log(res);
})

//Async Await
async function hello(){
    console.log("hello");
}*/

/*
function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("weather data");
        resolve(200);
       },2000);
});
}

async function getWeatherData(){
    await api();//1st call complete then go 2nd
    await api();//2nd  call
}
*/

//Async await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("success");
            
        },2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}