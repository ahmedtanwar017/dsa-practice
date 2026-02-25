let nums = [1,2,3,4,5,6]
function rotate(arr,d){
    let n = arr.length
    for(let i = 0; i < d; i++){
        let last = arr[n - 1]
        for(let j = n - 1; j > 0; j--){
            arr[j] = arr[j-1]
        }
        arr[0] = last
    } 
    return arr
}
console.log(rotate(nums,2));
