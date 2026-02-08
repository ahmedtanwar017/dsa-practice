const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "));
console.log(a);

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}

for(let s = 1; s <= a; s++){
    for(let k = 1; k <= s; k++){
        process.stdout.write("*" + "");       
    }
    console.log();
}

for(let s = 1; s <= a; s++){
    for(let k = 1; k <= a-s+1; k++){
        process.stdout.write("*" + "");       
    }
    console.log();
}