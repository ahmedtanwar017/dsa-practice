// // // const array = [12, 3, 1, 22, 5];

// // function Sorting(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     for (let j = 0; j < array.length - i - 1; j++) {
// //       if (array[j] > array[j + 1]) {
// //         let temp = array[j];
// //         array[j] = array[j + 1];
// //         array[j + 1] = temp;
// //       }
// //     }
// //   }
// //   return array;
// // }
// // // console.log(Sorting(array));

// // // function TwoSum(target, array) {
// // //   Sorting(array);
// // //   console.log(array);
// // //   let left = 0;
// // //   let right = array.length - 1;
// // //   let sum = "";
// // //   while (left < right) {
// // //     sum = array[left] + array[right];

// // //     if (sum == target) {
// // //       return [array[left], array[right]];
// // //     } else if (sum < target) {
// // //         left++;
// // //     } else{
// // //         right--;
// // //     }
// // //   }
// // //   return "No Pair Found"
// // // }
// // // console.log(TwoSum(8, array));

// // // let duplicate = [3, 3, 2, 2, 2, 3, 1, 1];
// // // // [1,1,2,2,2,3,3,3]
// // // function Duplicates(arr) {
// // //   Sorting(arr);
// // //   let i = 0;
// // //   let j = 1;
// // //   while (j < arr.length) {
// // //     if (arr[j] == arr[i]) {
// // //       j++;
// // //     } else if (arr[j] !== arr[i]) {
// // //       arr[i + 1] = arr[j];
// // //       i++;
// // //       j++;
// // //     }
// // //   }
// // //   return arr;
// // // }
// // // console.log(Duplicates(duplicate));

// // let chk = [-4,-2,0,3,5]
// // const sqaure = chk.forEach(function(num){
// //   const sqaure = num ** 2
// //   return sqaure
// // })

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// function removeDuplicates(nums) {
//     let i = 0;  // slow pointer

//     for (let j = 1; j < nums.length; j++) {  // fast pointer
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }

//     return i + 1;
// }
// console.log(removeDuplicates(nums));

// let nums1 = [1, 3];
// let nums2 = [2];
// var findMedianSortedArrays = function (nums1, nums2) {
//   const array = nums1.concat(nums2);
//   for (let i = 0; i < array.length; i++) {
//     if (i < array.lenght) {
//       const TotalL = nums1.length + nums2.length;
//       let M = TotalL / 2;
//       return M;
//     }
//   }
// };

// console.log(findMedianSortedArrays(nums1, nums2));

// let nums = [3,2,2,3];
// let nums2 = [0,1,2,2,3,0,4,2];
// let value = 3;
// let value2 = 2;

// var removeElement = function(nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {   // ✅ use val here
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// };

// console.log(removeElement(nums, value));
// console.log(removeElement(nums2, value2));

// console.log(nums);
// console.log(nums2);

let a = [-4,-1,0,3,10];
const square = a.map((n) => n ** 2);

var sortedSquares = function (arr) {
  if (arr.length <= 1) return arr; // base case

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(sortedSquares(left), sortedSquares(right));
};
function merge(left, right) {
  let temp = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }

  return [...temp, ...left, ...right];
}
console.log(sortedSquares(square));
