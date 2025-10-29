function printNumbers(N) {
  for(let i=0; i<=N; i++) {
    console.log(i);
  }
};

const button = document.querySelector('.print-numbers');
button.addEventListener('click', () => {
  printNumbers(5);
});

function printReverseNumbers(N) {
  for(let i=0; i<=N; i++) {
    console.log(N - i);
  }
};

const reverseButton = document.querySelector('.reverse-numbers');
reverseButton.addEventListener('click', () => {
  printReverseNumbers(5);
});


function evenNumber(N) {
  for(let i=0; i<=N; i++) {
    if(i%2===0) {
      console.log(i);
    } 
  }
};

const evenBtn = document.querySelector('.even-numbers');
evenBtn.addEventListener('click', () => {
  evenNumber(10);
});

function sumOfNumbers(N) {
  let  count = 0;
  for(let i=0; i<=N; i++) {
    count += i;
  }
  console.log(count);
};

const sumBtn = document.querySelector('.sum');
sumBtn.addEventListener('click', () => {
  sumOfNumbers(5);
});

function productOfNumbers(N) {
  let  product = 1;
  for(let i=1; i<=N; i++) {
    product *= i;
  }
  console.log(product);
};

const productBtn = document.querySelector('.product');
productBtn.addEventListener('click', () => {
  productOfNumbers(5);
});

function sumOfEvenNumber(N) {
  let  sum = 0;
  for(let i=1; i<=N; i++) {
    if(i%2===0) {
      sum += i;
    }
  }
  console.log(sum);
};

const sumEven = document.querySelector('.sum-even');
sumEven.addEventListener('click', () => {
  sumOfEvenNumber(10);
});

function squareOfNumber(N) {
  for(let i=0; i<=N; i++) {
    console.log(i*i);
  }
};

const square = document.querySelector('.square');
square.addEventListener('click', () => {
  squareOfNumber(5);
});

function divisibleNumber(N) {
  for(let i=0; i<=N; i++) {
    if(i%3===0 && i%5===0) {
      console.log(i);
    }
  }
};

const divBtn = document.querySelector('.divisible');
divBtn.addEventListener('click', () => {
  divisibleNumber(30);
});

function sumOfOdd(N) {
  let odd = 0;
  for(let i=0; i<=N; i++) {
    if(i%2!==0) {
      odd += i;
    }
  }
  console.log(odd);
};

const sumOdd = document.querySelector('.sum-odd');
sumOdd.addEventListener('click', () => {
  sumOfOdd(10);
});

function sumAndPerfectSquare(N) {
  
  for(let i=1; i*i<=N; i++) {
    let isPerfectSquare = i*i;
    if(isPerfectSquare%2===0) {
      console.log(isPerfectSquare);
    }
  }
};

const sumPerfect = document.querySelector('.sum-square');
sumPerfect.addEventListener('click', () => {
  sumAndPerfectSquare(20);
});