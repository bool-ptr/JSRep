let student= {
    firstName:'Ayan',
    lastName:'Chatterjee',
    age:18,
    sex:'M',
    college:'YESRMISTVDP',
    rollno:'RA1811003040004',
    class:'2nd Year',
    section:'D'
}

//console.log(student);
console.log(`Full Name: ${student.firstName} ${student.lastName}`);

// let myCourse={
//     name: 'Java Script',
//     price: 'free of cost :)',
//     description: 'Come, lets learn JS together',
//     author:'Ayaaaaan'
// }

//console.log(`AAAAAAAA New course alert eeeeeeeeeeeeeeeeeeee , So I bring to you the new and completely JavaScript Course come let's learn and do something for our own self`);

//console.log(`This be the course on ${myCourse.name} at a price of ${myCourse.price} by ${myCourse.author}`);
let ageToBeModified=5;
let ageModify= function(myObject){

     return{ age:`${myObject.age+ageToBeModified}`,
            sex:'F'
    
    }
}

let ageAdd=ageModify(student);
console.log(ageAdd);