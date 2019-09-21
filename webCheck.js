let userEmail='    Chinshss';
let password='qwerty123';
//console.log(userEmail.toLowerCase());
let name=userEmail.trim();
console.log(name.toLowerCase());
let userCheck=function(myString){
    if((myString.includes('qwerty'))||(myString.length<6)||(myString.includes('password'))){
        return true;
        
    }
}

console.log(userCheck(password));
//console.log(password.fontcolor('FA8072'));