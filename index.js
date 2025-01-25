// function sortNestedArray(arr) {
//   const result = arr.flat(Infinity);
//   return result.sort((a, b) => a - b);
// }

// let arr = [4, 2, [5, 8, [3, 1, 0], 6], 7, 9];
// let res = sortNestedArray(arr);
// console.log(res);

// function findPair(arr) {
//   let maxVal = 0;
//   let currentVal = 0;
//   for (let num of arr) {
//     if (num === 1) {
//       currentVal++;
//       maxVal = Math.max(maxVal, currentVal);
//     } else {
//       currentVal = 0;
//     }
//   }
//   return maxVal;
// }

// let arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];

// console.log(findPair(arr));

// function targetSum(num, target) {
//   let res = [];
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         res.push(num[i], num[j]);
//       }
//     }
//   }
//   return res;
// }

// let num = [1, 2, 3, 4, 5];
// let target = 9;
// console.log(targetSum(num, target));
function remStr(str) {
  const newStr = str.split("");
  const resArr = [];
  for (let i = 0; i < newStr.length; i++) {
    if (resArr[resArr.length - 1] !== newStr[i]) {
      resArr.push(newStr[i]);
    }
  }
  return resArr.join("");
}

const str = "acaaabbbcdddca";
const result = remStr(str);
console.log(result);

// words=['mass', 'as", ' superheroes']

// substrings=[''

function findSubString() {
  const words = ["mass", "as", "superheroes"];
  const substrings = [""];
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      for (let k = j + 1; k <= words[i].length; k++) {
        substrings.push(words[i].slice(j, k));
      }
    }
  }
  return result;
}
let words = ["mass", "as", "superheroes"];

console.log(findSubString(words));

function PailndromeStr(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let wrd = "medemll";
console.log(PailndromeStr(wrd));
