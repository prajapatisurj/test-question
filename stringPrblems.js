// const longestString = (str) => {
//   const result = str.reduce((largest, current) => {
//     return largest.length > current.length ? largest : current;
//   });
//   return result;
// };

// const str = ["apple", "banana", "cat", "dogoooooooooo", "elephant"];
// console.log(longestString(str));

// function PailndromeStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// let wrd = "medemll";
// console.log(PailndromeStr(wrd));


// const findSubstrings = (words) => {
//     const substrings = [];
//     for (let i = 0; i < words.length; i++) {
//       for (let j = 0; j < words.length; j++) {
//         if (i !== j && words[j].includes(words[i])) {
//           substrings.push(words[i]);
//           break; // Break the inner loop once the substring is found
//         }
//       }
//     }
//     return substrings;
//   };
  
//   // Example usage:
//   const words = ['mass', 'as', 'superheroes'];
//   console.log(findSubstrings(words)); 

// const findSubstrings = (words) => {
//     return words.filter(word =>
//       words.some(otherWord => otherWord !== word && otherWord.includes(word))
//     );
//   };
  
//   // Example usage:
//   const words = ['mass', 'as', 'superheroes'];
//   console.log(findSubstrings(words)); // Outputs: ['as']