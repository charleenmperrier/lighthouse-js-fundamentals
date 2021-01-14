// function sayHello() {
//   var message = 'hello'
//   return message;
// }
// console.log(sayHello())

//Practice declaring
// function findAverage(x, y) {
//   let answer = (x + y) / 2;
//   return answer;
// }
// let avg = findAverage(5,9);
// console.log(avg)

// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//   return "Returning: I am returning this string!";
// }

// isThisWorking(3);

// return vs console.log
// function sleep() {
//   console.log("I'm sleepy");
//   return 'zzz';
//   return 'snore';
// }
// sleep()

// function square(x) {
//   return x * x;
// }

// function subtractFour(x) {
//   return square(x) - 4;
// }

// console.log(subtractFour(5));

// function test() {
//   return 1;
//   return 2;
// }
// test()


//using return values

function add(x, y) {
  return x + y;
}

function divideByTwo(num) {
  return num / 2;
}

let sum = add(5,7);
let average = divideByTwo(sum)