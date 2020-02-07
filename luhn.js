//7 9 9 2 7 3 9 8 7 1    x
//7 18 9 4 7 6 9 16 7 2  x
//7 9  9 4 7 6 9 7 7 2   x
const addStrDigits = str => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str.charAt(i));
  }
  return sum;
};

const generateLuhn = number => {
  const arrNum = number
    .slice(0, number.length - 1)
    .split("")
    .reverse();

  const interNum = arrNum.map((num, ind) => {
    if (ind % 2 === 0) {
      return addStrDigits((num * 2).toString());
    }
    return Number(num);
  });
  const result =
    10 -
    (interNum.reduce((a, b) => {
      return a + b;
    }) %
      10);
  if (result === 10) {
    return 0;
  }
  return result;
};

const check = strNum => {
  if (generateLuhn(strNum) == strNum.charAt(strNum.length - 1)) {
    return true;
  }
  return false;
};

module.exports = { addStrDigits, generateLuhn, check };

//Test Code
// const str = "79927398713";
// console.log(check(str));

// const str1 = "6576824442";
// console.log(check(str1));

// const str2 = "8941616800";
// console.log(check(str2));

// const str3 = "8427786994";
// console.log(check(str3));
