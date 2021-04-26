function assertEqual(actual, expected) {
  if(actual === expected) {
    console.log("🟢🟢🟢Assertion Passed: " + actual + " === " + expected)
  } else (console.log("🔴🔴🔴Assertion Failed: " + actual + " !== " + expected))
}

assertEqual("Lighthouse labs", "Lighthouse labs");
assertEqual(1, 2)