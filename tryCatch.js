const convertToRs=(dollar)=>{
    if(typeof(dollar) === 'number')
    return dollar*65;
    else {
        throw Error('Amount needs to be in numbers you dumbo');
    }
}

try {
    const myValue=convertToRs('five');
    console.log(myValue);
    
} catch (error) {
    console.log(error);
    
}

console.log('I will not run if program crashes');

const myValue = convertToRs('a');// oh yesssss
console.log(myValue);
