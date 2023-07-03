
function fine(){
    var name
    console.log(name)
}


// var value = null
// console.log(value)

// Conditional Statement

// age = 16;
// console.log(age)

// if (age>=18){
//     console.log('Eligible for Voting')
// }

// else if(age<18){
//     console.log('Not Eligible')
// }


// switch (age){
//     case 18:
//         console.log('Eligible')
//         break
//     case 16:
//         console.log('Switch working')
//         break
//     default:
//         console.log('Not Working')
// }

// a=10
// a++
// console.log(a)
// a++
// console.log(a)


// check square

// length_=200
// breath='200'

// if(length_ == breath){
//      console.log('Working')
//  }
// else if(length_ === breath){
//     console.log('Not Working')
// }
// else{
//     console.log('not Code Working')
// }


obj={
    'name':'deepak',
    age:'25',
    dob:'13-03-2001',
}


// update Object value
// obj.name='kumar'

//delete obj.name



//Create Prototype for object.

obj1=Object.create(obj)
console.log(obj1.name)



obj.exp = 1




// var value=String(123)
// var value=String(-12.3)
// var value=String(null)
// var value=String(undefined)
// var value=String(true)
// var value=String(false)
// console.log(value)

// var value=Number(123) 
// console.log(value)


customers_data={ 
    'Ben10': [22, 30, 11, 17, 15, 52, 27, 12], 
    'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45], 
    'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]  
   }
 

var lst=[]



for(i in customers_data){
    var product = customers_data[i]
    var count=0
    for(j in product){
        if(product[j]>20){
            count+=1
            if(count===5){
                console.log('\tMr.' + i + ' you Winned the Premium membership')
            }
        }  

    }
     
    
}


 var student = [{ 
     name: "David Rayy", 
    sclass: "VI", 
    rollno: 12 
},
{ 
    name: "User", 
   sclass: "VI", 

},
]; 

for(i in student){
   
    student[i]?.rollno && console.log('output',student[i]?.rollno)

}


// student =  {  
//     name : "David Rayy",  
//     sclass : "VI",  
//     rollno : 12   
// }

// delete student.rollno

// console.log(student)


// var len=0
// for(i in customers_data){
//     len++
// }
// console.log('Length: '+len)


// library = [ 
//     { 
//     author: 'Bill Gates', 
//     title: 'The Road Ahead', 
//     readingStatus: true 
//     }, 
//     { 
//     author: 'Steve Jobs', 
//     title: 'Walter Isaacson', 
//     readingStatus: true 
//     }, 
//     { 
//     author: 'Suzanne Collins', 
//     title: 'Mockingjay: The Final Book of The Hunger Games', 
//     readingStatus: false 
//     }];

//     for(i in library){
//         if(library[i].readingStatus==true){
//             console.log('You have already read' + library[i].title + 'by' + library[i].author)
//         }
//         else if(library[i].readingStatus==false){
//             console.log('You still need to read' + library[i].title + 'by' + library[i].author)
//         }
//     }


// var len=0
// var max=0
// var arr=["asdf", "sd", "something","right","position"] 
//     for(i in arr){
//         leng_=arr[i].length
//         if(leng_>max){
//             max=leng_
//         }
//     }
//     for(i in arr){
//         if(max==arr[i].length){
//             console.log(arr[i])
//         }
//     }


// var len=0
// var max=0
//  var long
// for(i=0;i<arr.length;i++)
// {   len=0
//     len=arr[i].length
//     if(len>=max)
//     {
//         max=len
//         long=i
    
//     }

// }
// console.log(arr[long])

// var lst=[NaN, 0, 15, false, -22, '',undefined, 47, null,94]

// for(i in lst){
//     if (Boolean(lst[i])==true && lst[i]!=''){
//         console.log(lst[i])
//     }
// }

// var lst=[1, 3, 6, 2, 5, 10]
// var another=lst.slice(4)
// console.log(another)
// var mod_lst=[]
// var value_1=0
// var value_2=0
// for(i in lst.slice(0,4)){
//     value_1+=lst[i]
// }
// mod_lst.push(value_1)
// console.log
// for(i in another){
//     value_2+=another[i]
//     console.log(value_2)
// }
// mod_lst.push(value_2)
// console.log(mod_lst)


// Arrow Function

// var name_=(a,b)=>console.log(a+b);

// name_(1,5);


var person={
    user:{
        firstName:'deepak',
        lastName:'ganesh'
    },
}


// console.log(person?.age)



// console.log('First Name : ' + person.user?.firstName)


// arr=[1,3,5,4,2]

/* Add Array using splice
 arr.splice(2,0,'4','6')
 */

// Delete Array using splice

// arr.splice(2,2)
// console.log(arr)


// Concat
// arr1=[7,8,9]

// var new_=arr1.concat(arr)
// console.log(new_)

// Sort

// var new_=arr.sort()
// console.log(new_)

// Reverse

// arr = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']

//  var new_=arr.reverse()
//  console.log(new_)


// arr1 = [4, 11, 12, 23, 46, 65, 70, 73, 98];  
// arr2 = [7, 13, 25, 46, 58, 70, 84]; 

// for(i in arr2){
//     if (arr1[i] in arr2){
//         console.log('\t Element Found:Yes')
            //break
//     }
// }

// var arr = [4,5,6,7,8]  
// var arr1 = [3,4,6,6,7,8,9] 
// var arr2 = [34,23,45,55,67,77]

// function listcheck(lst){

    

//      for(i in lst){
//         var ind = Number(i)+1
//         console.log(ind)
//          var ele = lst[ind]
//          console.log(ele)
        
//          if (ele < lst[i]){
//              console.log(lst + ' Strictly not increasing sequence')
//              break
//          }

//          else if (ele == lst[i]){
//             console.log(lst + ' Strictly not increasing sequence')
//             break
//         }
//          else{

//             if(Number(i)==lst.length-1){
//                 console.log(lst + ' Strictly increasing sequence')
//             }
//             continue

//          }
//      }

// }





// listcheck(arr)
// listcheck(arr1)
// listcheck(arr2)


var coins=[25, 10, 5, 2, 1]



function changegiver(money){
    change=[]
    for(i in coins){
        if(money==0){
            console.log(change)
            break
        }

        else if (coins[0]<=money){
            var qty = coins[1]%money
            for(j=0, j<=qty;j++;){
                console.log(qty)
                apply=change.push(coins)
            }
            money -= qty*coins[1]

        }
        else if (coins[1]<=money){
            var qty = coins[1]%money
            for(j=0, j<=qty;j++;){
                console.log(qty)
                apply=change.push(coins)
            }
            money -= qty*coins[1]

        }

        else if (coins[2]<=money){
            var qty = coins[1]%money
            for(j=0, j<=qty;j++;){
                console.log(qty)
                apply=change.push(coins)
            }
            money -= qty*coins[1]

        }

        else if (coins[3]<=money){
            var qty = coins[1]%money
            for(j=0, j<=qty;j++;){
                console.log(qty)
                apply=change.push(coins)
            }
            money -= qty*coins[1]

        }

        else if (coins[4]<=money){
            var qty = coins[1]%money
            for(j=0, j<=qty;j++;){
                console.log(qty)
                apply=change.push(coins)
            }
            money -= qty*coins[1]

        }
    }


}

changegiver(50)





// var word = "Good, better, best. Never let it rest. 'Til your good is better and your better is best."
// var words=word.split("")
// // var join=words.join("")
// console.log(join)
// var count=0
// for(i in word){
//     if (word[i].toLowerCase() =='a' || word[i].toLowerCase() =='e' || word[i].toLowerCase() =='i' || word[i].toLowerCase() =='o' || word[i].toLowerCase() =='u'){
//         count++
//     }
// }
// console.log(count)


var value = 'javascript is cool'
var mod_value=''

var obj={
    a:4,
    e:3,
    i:1,
    o:0,
    s:5,

}


















