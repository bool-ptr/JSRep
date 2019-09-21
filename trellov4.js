// const myTask=['dudh peelo frnds', 'college ja','tiffin kha','bari aay','js kor'];
// console.log(myTask.indexOf('college ja'));

const newDeed=[{
title:'a',
isDone:false,
},
{
    title:'b',
    isDone:false,
},
{
    title:'c',
    isDone:true,
},];

//callback functions are siple functions but they don't have any name

// const index=newDeed.findIndex(function(todo,index){
//     return todo.title==='c';
// });
// console.log(index);

const findTodo= function(myTodo,title){
    const index=myTodo.findIndex(function(todo,index){
        return todo.title.toLowerCase()=== title.toLowerCase();
    })
    return myTodo[index];
}
let findDeed= findTodo(newDeed,'C');
console.log(findDeed);

