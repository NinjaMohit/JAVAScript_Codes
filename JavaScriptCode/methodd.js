//Map method
/*
let nums=[67,52,39];

let newArr=nums.map((val)=>{
return val*val;
});
console.log(newArr);
console.log(nums);


let ar=[1,2,3,4,5,6,7];
let evenArr=ar.filter((val)=>{
    return val%2===0;
});

console.log(evenArr);

let arr=[1,2,3,4];

const op=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(op);

let marks=[33,56,77,88,22,95,37,98];

let res=marks.filter((val)=>{
    return val>90;
});
console.log(res);


let n=5;
let arr=[n];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let mm=arr.reduce((prev,curr)=>prev+curr);
console.log(mm);


let sum=(num1,num2)=> {
    console.log("mohit");
   return num1+num2;
}
console.log(sum(5,6));

function hello(){
    console.log("hello mohit");
}

function hi(){
    console.log("hi mohit");
}
function sum(num1,num2,callback){
    console.log(num1+num2);
    callback();
}
sum(4,5,hello);
sum(3,3,hi);
*/
/*
let arr=[1,2,3,4,5];
let re=arr.map((val)=>{
    return val*val;
})
console.log(re)*/


class Parent{
    constructor(val){
      
        console.log("heello");
        this.val=val;
    }
    mohit(){
        console.log("yee");
    }
    }
    class Child extends Parent{
    constructor(name,val){
        super(val);
        this.name=name;
        console.log("child");
    }
    jayu(){
        super.mohit();
        console.log("yee jaaa");
    }
    }
    const child=new Child(11,"moh");
    
//console.log(obj.name);
//console.log(obj.val);