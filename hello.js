function sayHello() {
  console.log("hello");
}
sayHello()

let sayHi = function(name) {
  console.log("Hello " + name);
}
sayHi('Charlee')

let returnHello = function(name) {
  return 'Hello, ' + name;
}
let greeting = returnHello('charlee');
console.log(greeting)

