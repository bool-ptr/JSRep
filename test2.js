let marksCalculator= function(phy,chem,maths){
    let totalMarks=(phy+chem+maths);
    let average=totalMarks/3;
    return average;
    
}

let gradeAssign=function(avg){
    var grade;
    if(avg>90)
        grade='A';
    else if(avg>80 && avg<=90)
        grade='B';
    else if(avg>70 && avg<=80)
        grade='C';
    else if(avg>60 && avg<=70)
        grade='D';
    else if(avg>=50 && avg<=60)
        grade='E';
    else if(avg>=0 && avg<60)
        grade='F';
    else 
    {console.log(`boi wtf plx input correct marks thx :) also don't forget to drink water`);
        grade= 'WTF';   }          

    return grade;


}

let gradee= gradeAssign(marksCalculator(89,78,69));

console.log(`Hello friend your grade is  ${gradee}  and ${(marksCalculator(89,78,69))*3}/300 with a percentage of ${marksCalculator(89,78,69)}% :) have a nice day`);
