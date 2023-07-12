let name_ = 'Deepak';
console.log(name_)


// // normal function

function PrintVal(a = 9, ...many) {
    let newArray = [a, ...many];
    newArray.unshift(a)
    console.log(newArray);
  }
  
  PrintVal(1, 2, 3, 4);



// // arrow function

// const printVal = (a = 10,b =20)=> {console.log(a+b)};
// printVal();



const printVal = (...many)=> {
    console.log(many)};
printVal(2,4,6,8,0);

let arr=[2,5,8,6];
let arr1=[3,7,2,9];

let arr2=[...arr,...arr1];

console.log(`HI ${arr2}`)

var ray = [1,2,3,4]
ray.unshift(5)
console.log(ray)


