function HelloWorld(){
    console.log("Hello World");
}
HelloWorld()

function Sum(a,b){
    let c = a + b;
    console.log("Sum is:",c);
}
Sum(-222,223)

function AreaofRectangle(l,b){
    if(l <= 0 || b <= 0) {
        console.error("Value should be greater than 0");
        return;     // STOP execution
    }

    const area = l * b;
    console.log("Area Of Rectangle:", area);
}
AreaofRectangle(4,-14);

let array = [1,2,3,4,5]
function Sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum
}
console.log(Sum(array));
