/*let iAmGlobal="hello boi you got this just don't loose consistency";
var iAmLocal;
if(true)
{
    iAmLocal="hello plx nderstand that this is a good practice"; 
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
console.log(iAmGlobal);*/

let king ='John';

if(true){
    let king='Sam';
    if(true){
                let king ='Ram';
                console.log(king);

    }
}

if(true){

    console.log(king);
}