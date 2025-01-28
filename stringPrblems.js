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

// const targetSum=(arr,target)=>{
//   let res=[];
//   for(let i=0;i<arr.length-1;++i){
//     for(let j=i+1;j<arr.length;++j){
//       if(arr[i]+arr[j]===target){
//         res.push([arr[i],arr[j]])
//       }
//     }
//   }
//   return res
// }


// const arr=[2, 3, 4, 5, 6];

// const result =targetSum(arr,9)
// console.log(result)

// const findLongeststring=(str)=>{
//     return str.reduce((larg,curr)=>{
//         if(larg.length > curr.length){
//             return larg
//         }else{
//           return  curr
//         }
//     })
// }

// const str= ['kjhgfghjkoooooooooo','kjhgkj','kjj','loo']

// const res= findLongeststring(str)
// console.log(res)


// const flatArr=(arr)=>{
//   const res=arr.flat(Infinity)
//   return res.sort((a,b)=>{
//       return a-b
//   })
// }

// const RR=[1, [2, 3], [4, [5, 6]], 7];
// const arr= flatArr(RR)
// console.log(arr)



// const bubbleSort=(arr)=>{
//     for(let i=0;i<arr.length;++i){
//         for(let j=0;j<arr.length;++j){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }


// const arr=[88,76,3,55,23,12]
// const res=bubbleSort(arr)
// console.log(res)

// const fact=(num)=>{
//     if(!num){
//         return 1
//     }else{
//         return num *fact(num-1)
//     }
// }

// const num=5;
// console.log(fact(num))

// const painl=(str)=>{
//     let left=0;
//     let right=str.length-1;
    
//     while(left < right){
//         if(str[left]!==str[right]){
//             return false
//         }
//         left++;
//         right--
//     }
//     return true;
// }
// const str= 'aman'
// console.log(painl(str))
