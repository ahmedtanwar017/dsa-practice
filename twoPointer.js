const array = [12,3,1,22,5];

function Sorting(array){

    for(let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length - i - 1; j++){

            if(array[j] > array[j + 1]){

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }
        }
    }
    return array;
}

console.log(Sorting(array));


// function TwoSum(target,arr){
//     let left = arr[0];
//     let right = arr.lenght - 1;
//     let result = "";
//     for(let i = left; i < right; i++){
//         for(let j = right;j < left; right--){
//             result = i + j
//             if(result == target){
//                 return result
//             }
//         }
//     }
// }
// TwoSum(4,array)