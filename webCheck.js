let userEmail='    BOOBS';
let password='boobs';
//console.log(userEmail.toLowerCase());
let name=userEmail.trim();
console.log(name.toLowerCase());
let userCheck=function(myString){
    if((myString.includes('boobs'))||(myString.length<6)||(myString.includes('BOOBS'))){
        return true;
        //return `henlo boobs, your password is boobs so you like boobs? lets meet and discuss boobs`;
    }
}

console.log(userCheck(password));
//console.log(password.fontcolor('FA8072'));