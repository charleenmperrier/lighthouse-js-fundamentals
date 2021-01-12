// exercise 1
/*const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");

}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/
// exercise 2
/*const temp = -15;

if (temp < 0) {
  console.log("make sure you pick out a scarf!");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it");
} else {
  console.log("Short sleeves are fine.");
}
console.log('Now you can go outside') */

// exercise 3

/*const isCitizen = true;
let age = 26;

if (isCitizen && age > 18){
  console.log('You are eligible to vote');
}*/

// example 4
/*let temp = 55;
if (temp < -40 || temp > 40) {
  console.log('Maybe going outside is not a god idea...');
}*/

//Exercise
/*function whichSchool(age){
  if (age < 13) {
    console.log("Elementry School");
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  } else {
    console.log("Lighthouse Labs");
  }
}
whichSchool(17);
*/

// LOOPS

/*var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2
}
*/
// FIZZ BUZZ
/*var x = 1;
while (x <= 20) {
  if ( x % 3 === 0 && x % 5 ===0){
    console.log('JuliaJames');
  } else if (x % 3 === 0){
    console.log('Julia');
  } else if (x % 5 === 0){
    console.log('James');
  } else {
    console.log(x);
  }
  x = x + 1
}
*/

// ROCKECT LAUNCH
/*var x = 60;
while (x >= 0 ){
  if ( x === 50){
    console.log('Orbiter transfers from ground to internal power');
  } else if ( x === 31){
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (x === 16){
    console.log('Activate launch pad sound suppression system');
  } else if (x === 10){
    console.log('Activate main engine hydrogen burnoff system');
  } else if (x === 6){
    console.log('Main engine start');
  } else if (x === 0){
    console.log('Solid rocket booster ignition and liftoff!');
  } else {
    console.log(x);
  }
  x = x - 1
} */

//FOR LOOPS
// for (var i = 0; i<6; i = i+ 1){
//   console.log("Printing out i = " + i)
// }

// for (var x = 0; x < 5; x = x+1) {
//   for (var y = 0; y < 3; y = y+ 1){
//     console.log(x + ',' + y);
//   }
// }

// for (let i = 0; i < 6; i = i + 2){
//   console.log(i)
// }

// for (var i = 9; i >= 1; --i){
//   console.log('hello ' + i)
// }