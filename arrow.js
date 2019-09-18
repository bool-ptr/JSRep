

const sayHello= (name)=>{`hellowoeld ${name}`};

 console.log(sayHello('y'));

 const todos=[{
     title: 'buy bread',
     isDone: true,
 },{
     title: 'Go to gym',
     isDone: true,
 },{
     title: 'do js',
     isDone: false,
 }];

const thingDone= todos.filter(function(todo){
    return todo.isDone===true;

});
// same thing but so much more efficient, that is the arrow sign
 const thingsDone= todos.filter((todo)=>todo.isDone===true); 
 console.log(thingsDone);
 //console.log(thingDone);

