const array = ["nemo"];
const arrays = new Array(10).fill('nemo');
function Find(array){
    //t0 = performance.now();
    for (let i = 0;i<array.length;i++){ //we dont have array value so it will run N times 
        if (array[i] === 'nemo'){
            console.log("Found");
    //t1 = performance.now();
        }
    }
}
Find(arrays);
console.log(t1)

// O(n) Linear Time
// No. of element = No. of opertaion