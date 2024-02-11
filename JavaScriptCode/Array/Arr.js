//Map Reduce Filter

const arr=[1,4,9,16,25];

/*
let newarr=arr.map((element,index,array)=>{
return element>9;
});

console.log(newarr);
*/
/*
let newarr1=arr.map((element,index,array)=>{
    return `Index no= ${index} and value is ${element}  and ${arr}`;
    });
    
    console.log(newarr1);
    */

let newarr=arr.map((element)=>{
  return element*2;
}).filter((element)=>{
return element>10;
});
console.log(newarr);

let nums=[1,2,3,4,5];

let sum=nums.reduce((accumalor,element,index,arr)=>{
    return accumalor=accumalor+element;
})

console.log(sum)