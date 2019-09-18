//types of declaration

let execFunction= function(name){
    let a=4,b=5;
    console.log("Hello "+name+" :) you are doing great, you'll be just fine");
    let c=a+b;
    console.log(c);

}

execFunction("oyon");

let fullName= function(firstName,lastName){

    console.log("Welcome boi");
    console.log("Your full name is "+firstName+" "+lastName);
}

fullName("oyon","chattorjee");


//returning values in JS

let myAdder= function(n1,n2){

    let sum=n1+n2;
    return sum;
}

valToDisplay=myAdder(10,-11);
console.log(valToDisplay);

let myMultiplier= function(n1,n2){

    return n1*n2;
}

console.log(myMultiplier(4,5));

let guestUser= function(name='dafuq',courseCount=0){

    return 'hello '+ name +' your course count is '+ courseCount;
}

console.log(guestUser());