//  1. Program to find longest word in a given sentence ?
// function longestString(string) {
//   const result = string.reduce((largest, current) => {
//     return largest.length > current.length ? largest : current;
//   });
//   return result;
// }

// const words = ["a", "bii", "ciiii", "ghjklkjhgf"];
// console.log(longestString(words)); // Output: ghjklkjhgf

// 2. How to check whether a string is palindrome or not ?

// function isPalindrome(string) {
//   for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[string.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const str = "rar";
// console.log(isPalindrome(str)); // Output: true

// remove duplicates from array

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//         j--;
//       }
//     }
//   }
// }

// const arr = [1, 2, 3, 2, 4, 5, 6, 2, 7];
// removeDuplicates(arr);
// console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]

// 4. Program to find Reverse of a string without using built-in method ?

// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed; // Ensure the reversed string is returned
// }

// const str = "Hello World";
// const reversedStr = reverse(str); // Capture the reversed string
// console.log(reversedStr); // Outputs: "dlroW olleH" // Output: dlroW olleH

// 5. Find the max count of consecutive 1’s in an array ?

// function maxConsecutiveOnes(arr) {
//   let max = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       count++;
//       max = Math.max(max, count);
//     } else {
//       count = 0;
//     }
//   }
//   return max;
// }

// const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1];
// console.log(maxConsecutiveOnes(arr));

// 6. Find the factorial of given number ?
// function fact(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }

// const num = 5;
// const factorial = fact(num);
// console.log(factorial);

// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

// function merge(arr1, arr2) {
//   let res = arr1.concat(arr2);
//   return res.sort((a, b) => a - b);
// }

// const arr1 = [0, 3, 4, 31];
// const arr2 = [4, 6, 30];
// const merged = merge(arr1, arr2);
// console.log(merged);

// 11. Write a JavaScript program to find the maximum number in an array.

// function findMax(arr) {
//   return Math.max(...arr);
// }
// const numbers = [4, 2, 9, 6, 5, 1];
// console.log(findMax(numbers)); // Output: 9
