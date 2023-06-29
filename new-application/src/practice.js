
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


// student = { 
//     name: "David Rayy", 
//     sclass: "VI", 
//     rollno: 12 
// }; 

// for(i in student){
//     lst.push(i)
// }
// console.log(lst)

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

var lst=[1, 3, 6, 2, 5, 10]
var another=lst.slice(4)
console.log(another)
var mod_lst=[]
var value_1=0
var value_2=0
for(i in lst.slice(0,4)){
    value_1+=lst[i]
}
mod_lst.push(value_1)
for(i in another){
    value_2+=lst[i]
    console.log(value_2)
}
mod_lst.push(value_2)
console.log(mod_lst)







