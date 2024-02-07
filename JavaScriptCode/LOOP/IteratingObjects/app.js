const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Object literals are not iterable usin "for of".uhave to use "for in".

// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);//person value is in string format so we use testscore["string"] use case
}

// Object.keys(objectName) -> it will return array of keys of object
// Object.values(objectName) -> it will return array of values of object
// Object.entries(objectName)

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

// objects dont have length so u have to track it another way 
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

