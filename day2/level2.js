console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.'
 by John Holmes teaches us to help one another.`)

console.log(`"Love is not patronizing and charity isn't about pity, it is about love. 
Charity and love are the same -- 
with charity you give love, so don't just give money but reach out your hand instead."`)
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num1 = '10';
let num2 = 10;
console.log(typeof num1 === typeof num2);
let n1 = parseInt(num1);
let n2 = num2.toString();
console.log(typeof n1 === typeof num2);
console.log(typeof n2 === typeof num1);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = Math.ceil(parseFloat('9.8'));
console.log(num === 10);
// Check if 'on' is found in both python and jargon

let w1 = 'python';
let w2 = 'jargon';
if(w1.match('on') && w2.match('on')){
    console.log(`on is found in both items`);
}
//I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon'));

//Generate a random number between 0 and 100 inclusively.
let rnum = 100;
console.log(Math.round(Math.random()*(rnum)));

// Generate a random number between 50 and 100 inclusively.
let rnum1 = 50;
let rnum2 = 100;
console.log(Math.round(Math.random()*(rnum2-rnum1+1)+rnum1));




