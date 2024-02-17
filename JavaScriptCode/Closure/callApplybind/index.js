//Apply call bind

//call
/*
let userDetails={
    name:"Ajay Suneja",
    Age:28,
    Designation:"Software Engineer",
    printDetails:function(){
       console.log(this); 
    }
}
userDetails.printDetails();

let userDetails2={
    name:"Anuj Suneja",
    Age:29,
    Designation:"Software Engineer",
}

//Function Borrowing
userDetails.printDetails.call(userDetails2);
*/



let userDetails={
    name:"Ajay Suneja",
    Age:28,
    Designation:"Software Engineer",
    
}
let printDetails=function(state,country){
       console.log(this.name+" "+state +" "+country); 
    }

printDetails.call(userDetails,"delhi","india");
let userDetails2={
    name:"Anuj Suneja",
    Age:29,
    Designation:"Software Engineer",
}


printDetails.call(userDetails2,"delhi","india");

printDetails.apply(userDetails2,["Delhi","india"]);


//bind
let newfun=printDetails.bind(userDetails2,"Delhi","india")
newfun();


