const girl={
    comment: 'hello bois',
    age: 19,
    isActive: true,
}

const boy={
    comment: 'hello girls',
    age:20,
    isActive: true,
}

const trans={
    comment:'commo estas?',
    age:19,
    isActive: false,
}



let users =new Map;
users.set('girl',girl);
users.set('boy',boy);
users.set('trans',trans);
console.log(users.values());

console.log(users);
// console.log(users.size);
// console.log(users.keys());

// for (const key of users.keys()) {
//     console.log(key);
    
// }

// console.log(users.values());
// for (const value of users.values()) {

//     console.log(value.comment);
    
// }

// for (const [key,value] of users.entries()) {
//     console.log(key+' ='+ value.age);
    
// }//forOf loop application

// //for each loop application
// users.forEach((value,key)=>console.log(key+' = '+ value.age));// see how the order of the pvalue and key have changed. why is this,go home and see
// var arrOfArray= [['one','1'],['two','2'],['three','3']];
// var newMap= new Map(arrOfArray);
// //console.log(newMap);

//  arrOfArray.forEach((value,key)=>{console.log(`${value}+${key+1}`)})

// console.log(arrOfArray.keys);






