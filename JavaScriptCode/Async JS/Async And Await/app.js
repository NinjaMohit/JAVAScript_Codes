//Async Await
/*
async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("weather data");
    resolve(200);
},2000);
    });
}


async function getWeatherData(){
    await api();
    await api();
}

*/
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
async function getAllData(){
    await getData(1);
    await getData(2);
}

//Immediatly invoked function expression
//IIFE

(async function(){
    await getData(1);
    await getData(2);
})();