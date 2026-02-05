let arr = [2,3,34,5,5,5]
const prompt = require("prompt-sync")();

let newarr = arr.map(function(value){
    return value 
})
console.log(newarr);

arr.forEach(function(value){
    console.log(value);
})

let oldarr = arr.filter(function(value){
    if(value == 34)
        return true
    else
        return false
})
console.log(oldarr);

// InsertionElement

// insert at last
arr[arr.length] = 50
console.log(arr);

// insert at beginning 
let value = 50
for(let i = arr.length;i > 0;i--){
    arr[i] = arr[i - 1]
}
arr[0] = value
console.log(arr);

let index = prompt("Enter Index: ");
for(let i = arr.length; i > index; i--){
    arr[i] = arr[i - 1]
}
arr[index] = value
console.log(arr);

// UpdateElement

function UpdateElement(arr,index,elem){
    if(index > arr.length || index < 0)
        return false;
    for(let i = index;i < arr.length - 1;i++){
        arr[index] = elem
    }
    return arr
}
UpdateElement(arr,2,10)
console.log(arr);

// DeleteElement 

function Deletion(arr,index){
    if(index > arr.length || index < 0)
        return false;
    for(let i = index; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length -1;
    return arr.length
}
Deletion(arr,2)
console.log(arr);
