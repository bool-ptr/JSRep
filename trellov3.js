let myBoobs= {
    day:'Monday',
    meetings:10,
    meetDone:0,

    addMeeting: function(num){
       this.meetings+=num;
    },
    summaryThisShit: function(){
        return `henlo your meetings: ${this.meetings}`;
    }

}
myBoobs.addMeeting(5);
console.log(myBoobs.summaryThisShit());
//meetings added
//handle meetings done
//create function which resets the meetings
