const array = [12, 3, 1, 22, 5];

function Sorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
// console.log(Sorting(array));

function TwoSum(target, array) {
  Sorting(array);
  let left = 0;
  let right = array.length - 1;
  let sum = "";
  while (left < right) {
    sum = array[left] + array[right];

    if (sum == target) {
      return [array[left], array[right]];
    } else if (sum < target) {
        left++;
    } else{
        right--;
    }
  }
  return "No Pair Found"
}
console.log(TwoSum(8, array));
