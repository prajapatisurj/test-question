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
// function remStr(str) {
//   const newStr = str.split("");
//   const resArr = [];
//   for (let i = 0; i < newStr.length; i++) {
//     if (resArr[resArr.length - 1] !== newStr[i]) {
//       resArr.push(newStr[i]);
//     }
//   }
//   return resArr.join("");
// }

// const str = "acaaabbbcdddca";
// const result = remStr(str);
// console.log(result);




// bubble sort

// const bubbleSort = (arr) => {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j - 1]) {
//         let temp = arr[i];
//         arr[i] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
// };

// const arr = [64, 34, 25, 12, 22, 11, 90];
// bubbleSort(arr);
// console.log(arr);
