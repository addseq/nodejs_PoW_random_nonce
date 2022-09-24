// Boolean review
console.log(1 <= 3)

// Equal to
console.log(1 == 1)
console.log(1 == 3)

// Strict compare
console.log(1 == "1")  // true - even if datatypes are different
console.log(1 === "1")  // false - strict compare enforces matching datatypes, preferred

// Not !
console.log(!(1 <= 3)) // !true -> false
console.log(!false)  // !false -> true
console.log(1 !== 1)  // false

// And &&
console.log(true && true)  // true
console.log(true && false) // false

let age = 70
// check this person is an adult (18+)
// check this person is not a senior citizen (<65)
console.log(age >= 18 && age < 65)

// test edge cases: below 18, above 65, 18-65, right at 18 and 65

// Or ||
// check that this person is either a underaged person or senior citizen
age = 20
console.log(age < 18 || age >= 65)

// If Else Conditionals and Nested Conditionals
// Hong Kong: 18+
// Japan: 20+
// US: 21+
// age = prompt("What is your age?")
// console.log(typeof age)  // interprets your input as a string e.g. "20" -> parseInt() or Number()
// See https://www.w3schools.com/js/js_type_conversion.asp
if (age >= 21) {
  console.log("drink anywhere you want")
}
else if (age >= 18) {
  console.log("old enough to drink in TW!")
}
else {
  console.log("no party for you!")
}

if (age >= 18) {
  if (age >= 21) {
    console.log("drink anywhere you want")
  } else {
    console.log("old enough to drink in TW!")
  }
} else {
  console.log("no party for you!")
}

// Blockchain transaction validation
// balance >= spending amount
let walletBalance = 0.5
let transactionAmount = 0.3
let gasFee = 0.001
let newBalance = walletBalance - transactionAmount - gasFee

if (walletBalance - transactionAmount >= 0) {
  console.log("Transaction confirmed!")
  console.log("Remaining Balance:", newBalance)
}

// Limit Order
// let bitcoin = prompt("Current Bitcoin USD Price:")
let bitcoin = 20000

if (bitcoin < 20000) {
  console.log("Buying BTC...")
} else if (bitcoin > 30000) {
  console.log("Selling BTC...")
} else {
  console.log("HODLing")
}

// LUNA/UST stable coin mechanism
// let UST = prompt("UST Price:")
let UST = 1.1

if (UST < 1) {
  console.log("Burn UST, Mint Luna")
} else if (UST > 1) {
  console.log("Burn Luna, Mint UST")
} else {
  console.log("UST is $1 exact")
}

// Loops
// for (starting condition; continuing condition; increment)
// e.g. count from 1 to 10
// starting: 1
// ending: 10
// increment: go up by 1
// i++ <> i=i+1
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i, "is even")
  } else {
    console.log(i, "is odd")
  }
}

// x%y = x mod y = remainder of x/y
// 5%2 = 1

// POW - Proof of Work Mining simulation, compute correct nonce to produce a certain hash with leading zeros "0000"
const SHA256 = require("crypto-js/sha256")
// console.log(String(SHA256("x->y 1BTC")))

runPOWForLoop = false
if (runPOWForLoop) {
  const blockData = prompt("Block data:")
  let hash = String(SHA256(blockData + "0"))
  // starting condition: nonce = 1
  // continuing condition: as long as hash doesn't start with "0000" keep trying till find it
  // increment: nonce goes up by 1
  for (let nonce = 1; !hash.startsWith("0000"); nonce++) {
    hash = String(SHA256(blockData + String(nonce)))
    console.log(nonce, hash)
  }

}

runPOWWhileLoop = false
if (runPOWWhileLoop) {
  const blockData = prompt("Block data:")
  let hash = String(SHA256(blockData + "0"))
  
  while (!hash.startsWith("0000")) {
    // random nonce
    let nonce = Math.floor(Math.random() * 1000000) // random int between 0 and 999999
    hash = String(SHA256(blockData + String(nonce)))
    console.log(nonce, hash)
  }
}

// while loop
// while (some condition) { keep going }
runWhileLoop = false
if (runWhileLoop) {

  let orderExecuted = false
  // limit order
  while (!orderExecuted) {
    let bitcoin = prompt("Current bitcoin price in USD:")

    if (bitcoin < 20000) {
      console.log("Buying BTC...")
    } else if (bitcoin > 30000) {
      console.log("Selling BTC...")
    } else {
      console.log("HODLing")
    }
  }
}