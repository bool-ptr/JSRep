let a= {
    day:'Monday',
    meetings:0,
    meetDone:0,
}

let addMeeting=function(todo,numberOfMeetingstoAdd){

    todo.meetings+=numberOfMeetingstoAdd;
}

let meetingDone=function(todo,numberOfMeetingsDone){

    todo.meetDone-=numberOfMeetingsDone;
}

let resetDay=function(todo){
   todo.meetings=0;
   todo.meetDone=0;
}

let summaryOfDay=function(todo){
    let meetLeft=todo.meetings+todo.meetDone;
    return `${meetLeft}`;

}

addMeeting(a,10);
addMeeting(a,5);
meetingDone(a,2);
console.log(summaryOfDay(a));