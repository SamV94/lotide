function assertEqual(actual, expected) {
  if(actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}!`)
  } else (console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}!`))
}

let myArr = []

function head(myArr) {
  for (let i = 0; i < myArr.length; i++) {
    
  }console.log(myArr[0])
}

assertEqual(head(["Hello", "Lighthouse", "Labs"]))