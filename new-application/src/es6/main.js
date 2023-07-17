

// let name_ = 'Deepak';
// console.log(name_)


// // normal function

// function PrintVal(a = 9, ...many) {
//     let newArray = [a, ...many];
//     newArray.unshift(a)
//     console.log(newArray);
//   }
  
//   PrintVal(1, 2, 3, 4);



// // arrow function

// const printVal = (a = 10,b =20)=> {console.log(a+b)};
// printVal();



// const printVal = (...many)=> {
//     console.log(many)};
// printVal(2,4,6,8,0);

// let arr=[2,5,8,6];
// let arr1=[3,7,2,9];

// let arr2=[...arr,...arr1];

// console.log(`HI ${arr2}`)

// var ray = [1,2,3,4]
// ray.unshift(5)
// console.log(ray)



// const sayName = a =>{
//   console.log('Hello',a)
// }

// sayName('Deepak')


// const sayHello = function(){        //arguments work in normal functions
//   console.log(arguments)
// }

// sayHello(1,'deepak',2001)


// const sayHello1 =()=>{        //arguments not work in normal functions
//   console.log(arguments)
// }

// sayHello1(1,'deepak',2001)

// setTimeout(function(){
//   console.log('Hello')
// },5000)


// In Arrow Function 

// setTimeout(()=>{
//     console.log('Hello')
//   },5000)
  

// function sayHello(){
//   console.log('After')
// }

// sayHello()=>{
//     console.log('After')  arrow function doesn't have name bcoz it is anonymous function
//   }

// sayHello()


// function Person(n){
//   this.name=n
// }

// const new_=new Person('deepak')
// new_

//  const Person = (n) =>{
//     this.name=n
//   }                          #It shows person is not a constructor 
  
//   const new_=new Person('deepak')
//   new_


// Object Method

// const obj={
//   talk: function(){
//     console.log('Deepak')
//   }
// }

// obj.talk()


// const obj={
//     talk: ()=>console.log('Deepak'),    //It is working
//   }
  
//   obj.talk()


  const fun ={
    name:'deepak',
    sayname: ()=>{
      return this
    },
    sayhello: function(){
      return this
    }

  }

  console.log(fun.sayhello())

