// Making an array:
const colors = ["red", "orange", "yellow"];

// javascript Arrays are heterogeneous ,they can store multiple type values

// Arrays are indexed like strings:
colors[0]; // "red"
colors[0][2]//this will give me 2nd index char of 0th index element of color arry

// They have a length:
colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array {distructive to array}
//pop() - removes and returns last value in array {distructive to array}

//unshift(val) - adds value to START of an array {distructive to array}
//shift() - removes and returns first element in an array {distructive to array}

// concat(array) - merge two arrays {distructive to array}
// includes(search element ) - returns boolean on the basis of the element is in an array or not
// reverse(){distructive to array}
// slice(startindex, endindex) - slice arrya in betwn parameters {undistructive to array}
// splice(startingindex,noofelementstodelete,itemstoinsert1,itemstoinsert2.......) {distructive to array}
// sort()