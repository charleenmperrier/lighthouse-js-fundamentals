// var sister = {
//   name: "Sarah", 
//   age: 23,
//   parents: [ "alice", "andy" ],
//   siblings: ["julia"],
//   favoriteColor: "purple",
//   pets: true
// };
//  console.log(sister['parents'])
//  console.log(sister.parents)


//Object literals, methods, and properties

// var myObj = { 
//   color: "orange",
//   shape: "sphere",
//   type: "food",
//   eat: function() { return "yummy" }
// };

// console.log(myObj.eat())
// console.log(myObj.color)


//Quiz: menu items

// let breakfast = {
//   name: 'The Lumberjack',
//   price: 9.95,
//   ingredients: ['eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes']
// }

//Quiz: bank accounts

// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   }
//   printAccountSummary: function() {
//     return "Welcome! \nYour balance is currently " + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%"
//   }
// };

//Quiz: facebook

let facebookProfile = {
  name: 'Chuck',
  friends: 300,
  messages: ['i like that', 'that\'s cool', 'yay!'],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends + 1;
  },
  removeFriend: function () {
    if(facebookProfile.friends>0)
    facebookProfile.friends = facebookProfile.friends - 1;
  }
}

//Quiz: Donuts Revisited

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// donuts.forEach(function(donut) {
//   donut += " hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// });

donuts.forEach(function(donut) {
  console.log(donut.type + ' donuts cost $' + donut.cost + ' each')
})