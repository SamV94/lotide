function assertEqual(actual, expected) {
  if(actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}!`)
  } else (console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}!`))
}


function tail(newArr) {
  return newArr.slice(1)
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");



