function maxOfThree(n,m,p) {
  if(n > m && n > p) {
    console.log(n);
  } else if(m > n && m > p) {
    console.log(m);
  } else if(p > n && p > m) {
    console.log(p);
  }
}

maxOfThree(22,33,44);

function comparingNumbers(n) {
  if(n > 0) {
    console.log('positive');
  } else if(n === 0) {
    console.log('Zero');
  } else if(n < 0) {
    console.log('Negative');
  }
};
comparingNumbers(9);

function calculateBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } 
  else if (units <= 200) {
    total = (100 * 5) + ((units - 100) * 7);
  } 
  else if (units <= 300) {
    total = (100 * 5) + (100 * 7) + ((units - 200) * 10);
  } 
  else {
    total = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 12);
  }

  console.log(total);
};

calculateBill(230);

function checkVowelOrConsonant(char = '') {
  if(char === '' || !isNaN(char)) {
    console.log("Not a valid alphabet!")
    return;
  }
  const charLower = char.toLowerCase();
  if(charLower === 'a' || charLower === 'e' || charLower === 'i' || charLower === 'o' || charLower === 'u') {
    console.log('Vowel');
  } else {
    console.log('Consonant');
  }
}
checkVowelOrConsonant('1');

function checkVowel(ch) {
  if(ch === '' || !isNaN(ch)) {
    console.log("Not a valid alphabet!")
    return;
  }
  const lower = ch.toLowerCase();
  if('aeiou'.includes(lower)) {
    console.log('vowels');
  } else {
    console.log('consonant')
  }
};
checkVowel('Z');

function isLeapYear(year) {
  if(year % 4 === 0) {
    return true;
  } else if(year % 100 !== 0){
    return false;
  } else if (year % 400 === 0) {
    return true;
  }
}
console.log(isLeapYear(2025));