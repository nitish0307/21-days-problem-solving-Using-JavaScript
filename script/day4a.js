function splitNumberIntoDigits(n) {
  const digits = [];
  while (n > 0) {
    const digit = n % 10;      // get last digit
    digits.unshift(digit);     // add to the beginning of the array
    n = Math.floor(n / 10);    // remove last digit
  }
  return digits;
}

// Example:
console.log(splitNumberIntoDigits(12345789)); // [1, 2, 3, 4, 5]

console.log("it's just to maintain the streak");
