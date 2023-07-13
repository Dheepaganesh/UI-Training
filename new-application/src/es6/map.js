// const arr = [1,2,3,4,5]
// const arr1=arr.filter(r=>r%2!==0)
// console.log(arr1)

// const ar = [1,2,3,4]
// const new_=ar.reduce((a,b)=>{
//     return b/a
// },1)
// console.log(new_)

// const obj={
//     name:'deepak',
//     age:21,
//     job:{
//         role:'React JS',
//         title:'developer'
//     }
// }

// const{name:firstName,age:Age,job:work,job:jobtitle}= obj

// console.log(`\n\tName:${firstName}\n\tAge:${Age}\n\tWork:${work?.role}\n\tJob:${jobtitle?.title}`)






// /.Map./

// function fiveAndGreaterOnly(arr) {
//     let new_=arr.filter(a=>a>5)
//     return new_
//   }
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2]));



//   function evensOnly(arr) {
//     let fil=arr.filter(a=>a%2===0)
//     return fil
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2]));




//   function fiveCharactersOrFewerOnly(arr) {
//     let least = arr.filter(ele=>ele.length<=5)
//     return least
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  


//   function ofAge(arr){
//         var vote=arr.filter(ele=>ele?.age>=18)
//         return vote
//   }
//   // test
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ])); 


// function peopleWhoBelongToTheIlluminati(arr){
//     var valid = arr.filter(ele=>ele?.member===true);
//     return valid
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));


// /.Reduce./

// function total(arr) {
//    const total = arr.reduce((a,b)=>{
//     return a+b
//    },0)
//    return total
//  }
 
//  console.log(total([1,2,3]))

//  function stringConcat(arr) {
//     const str = arr.reduce((a,b)=>{
//         return String(a)+String(b)
//     },'')
//     return str
//  }
//  console.log(stringConcat([1,2,3]));




//  function totalVotes(arr) {
//     let vote = arr.reduce((a,b)=>{
//             if(b?.voted===true){
//                 a+=1}
//         return a
//         },0);
//         return vote
//     }
    

 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log('Voters',totalVotes(voters));


// function shoppingSpree(arr) {
//     var shop = arr.reduce((a,b)=>{
//         return a+b?.price
//     },0)   
//     return shop
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005

// function flatten(arr) {
//     var con = arr.reduce((a,b)=>{
//         return a.concat(b)
//     },[])  
//     return con
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays));



// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    var vote = arr.reduce((a,b)=>{
//         if(a?.age ){
            
//         }

//    },{
//     youngvote:0,
//     youngpeople:0,
//     midagevote:0,
//     midagepeople:0,
//     oldvote:0,
//     oldpeople:0,

//    })
// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ];


  let average = students.map(ele=>{
        let new_= ele?.scores.reduce((a,b)=>{

                    return (((a+b)))
                },0)
        ele.average = new_/3
        return ele
    },0)

console.log(average)

    let fil = average.filter(ele=>ele?.average>=90)
    console.log(fil.reverse())

    
    

  

//   let avg= students.map(ele=>{
//     ele.scores/=100})

//     console.log(avg)

//   let average = students.filter(ele=>{
//     let new_= ele?.scores.reduce((a,b)=>{

//         return ((a+b)/100)
//     },0)

//   let add_average =students.map{}
    
//     // let fil = new_.filter()
    
//   })
