var x=10;
function Outer(){
    var y=20;
    function Inner(){
        var z=30;
         var sum= x+y+z;
         return sum;
    }
    return Inner;
}

let m=Outer();
console.log(m());