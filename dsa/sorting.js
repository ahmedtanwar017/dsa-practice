function select(arr){
    let n = arr.length
    for(let i = 0;i < n-1; i++){
        let minIndex = i
        for(let j = i+1; j < n; j++){
            if(arr[minIndex]>arr[j]){
                let temp = arr[minIndex]
                arr[minIndex] = arr[j]
                arr[j] = temp

            }
        }  
    }
    console.log(arr);  
}

// select(arr)

function bubble(arr){
    let n = arr.length
    for(let i = 0;i < n-1; i++){
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        console.log(arr);       
    }
}
// bubble(arr)

function Insert(arr){
    let n = arr.length
    for(let i = 1;i < n; i++){
        let key = arr[i]
        let j = i - 1
        while(arr[j] > key){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j+1] = key
    }
    console.log(arr); 
}
// Insert(arr)

function mergeSort(arr, st, ed) {
    if (st >= ed) return;

    const mid = Math.floor((st + ed) / 2);

    // Recursively divide the array
    mergeSort(arr, st, mid);
    mergeSort(arr, mid + 1, ed);

    // Merge the two sorted halves
    merge(arr, st, mid, ed);
}

function merge(arr, st, mid, ed) {
    const left = arr.slice(st, mid + 1);
    const right = arr.slice(mid + 1, ed + 1);

    const temp = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            temp.push(left[i++]);
        } else {
            temp.push(right[j++]);
        }
    }

    // Push remaining elements
    while (i < left.length) temp.push(left[i++]);
    while (j < right.length) temp.push(right[j++]);

    // Copy back to original array
    for (let k = 0; k < temp.length; k++) {
        arr[st + k] = temp[k];
    }
}

// Example usage:
// const arr = [38, 27, 43, 3, 9, 82, 10];
// mergeSort(arr, 0, arr.length - 1);
// console.log("Sorted Array:", arr);

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (i <= j && arr[i] <= pivot) i++;
        while (i <= j && arr[j] > pivot) j--;

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Place pivot in correct position
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

quickSort(arr);
console.log("Sorted array:", arr);

function searchInsert(arr, x) {
  let n = arr.length;
  let low = 0;
  let high = n;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }return(ans)
}

let arr = [1, 2, 4, 7];
let x = 6;
let ind = searchInsert(arr, x);
console.log("The index is:", ind);