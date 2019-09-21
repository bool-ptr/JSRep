let myMeeting= {
    day:'Monday',
    meetings:10,
    meetDone:0,

    addMeeting: function(){

        console.log('srm sux');

    },
    letsAdd: function(){

        this.meetings+=69;
        return this.meetings;
    }
}


myMeeting.addMeeting();
console.log(myMeeting.letsAdd());