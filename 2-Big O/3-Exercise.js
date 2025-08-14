// Big O Calculations
function FunChallenge(Input){
    let a = 5;  //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)

    for(let i = 0;i < Input;i++){
        let x = i + 1;  //O(n)
        let y = i + 2;  //O(n)
        let z = i + 3;  //O(n)
    }
}
//Big O(3 + 3n)

// Worst Case (To find 2 still runs 5 times)
const array = [0,1,2,3,4]
function Find(arr){
    //t0 = performance.now();
    for (let i = 0;i<array.length;i++){ //we dont have array value so it will run N times 
        if (array[i] === 2){
            console.log("Found");
    //t1 = performance.now();
        }
    }
}
// Big O(n)

//Remove constant
function Find(array){ 
    for (let i = 0;i<array.length;i++){ // O(n)
        console.log(arr);
    }

    for (let i = 0;i<array.length;i++){ // O(n)
        console.log(arr);
    }
}
// O(n) + O(n) = O(2n) = O(n)

//Differents terms of inputs(nested loops )
function pattern1(n){
    for (let i = 0;i < n.length;i++){
        for (let j = 0;j < n.length;j++){
            console.log(n[i],n[j])
        }
    }
}
// O(n * n) = O(n^2) Qaudratic Time

//Drop non Dominants
function PrintAllNumbersThenAllPairsSums(numbers){
    console.log("these are the numbers")
    numbers.forEach(function(number){
        console.log(number)
    });
    console.log('and these are their sums');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        })
    })
}
PrintAllNumbersThenAllPairsSums([1,2,3,4,5])
//O(n+n^2) = O(n^2)

