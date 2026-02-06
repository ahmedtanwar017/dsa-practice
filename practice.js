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
    if(l <= 0 || b <= 0)
        throw new Error("Value should be greater than 0");       
    const area = l * b;
    console.log("Area Of Rectangle:",area);
}
AreaofRectangle(4,-14)