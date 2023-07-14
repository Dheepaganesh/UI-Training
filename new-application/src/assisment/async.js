//synchronous

// console.log('HI');

// console.log('Deeoak');

// console.log('you are ');

// console.log('using');

// console.log('VSCODE');


// Asynchronous

// console.log('HI');

// console.log('Deeoak');

// setTimeout(()=>{ console.log('you are ');},4000)

// console.log('using');

// console.log('VSCODE');


// Callbacks

// function one(arg){
//     console.log('One completed.Please Call two')
//     arg()
// }

// function two(){
//     console.log('Two')
// }


// one(two)


//Callbacks


let stock = {
    fruits:['apple','banana','cherry','orange'],
    liquid:['water','ice'],
    holder:['cone','cup','stick'],
    toppins:['chocoloate','peanuts'],
};




let order = (fruit_name,call_production) =>{
    
    setTimeout(()=>{
        console.log(`${stock?.fruits[fruit_name]} was selected`)
},0000)

    call_production()

}

let production =()=>{

    setTimeout(()=>{
        console.log('order recieved.')
        setTimeout(()=>{

        })
    },2000)
    
}

order(3,production)









let shop_status = true

let shop_order =(time,work)=>{
    return new Promise((resolve,reject)=>{
        if(shop_status===true){
            setTimeout(()=>{
                resolve(work()) 
            },2000)
           
        }
        else{
            reject(console.log('the shop is closed'))

        }
    })



    
}

shop_order(2000,()=>console.log(`${stock?.fruits[0]} was selected`))

.then(()=>{
    return shop_order(0000,()=>console.log('Production hs started'));
})
.then(()=>{
    return shop_order(2000,()=>console.log(`${stock?.fruits[0]} was chopped`))
})
.then(()=>{
    return shop_order(2000,()=>console.log(``))
})
