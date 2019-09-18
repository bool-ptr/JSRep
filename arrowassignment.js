const myList=[{
    title:'ram',
    isDone:false,
},{
    title:'risham',
    isDone:true,
},{
    title:'sham',
    isDone:false,
},{
    title:'ramarjun',
    isDone:false,
},{
    title:'arm',
    isDone:true,
},{
    title:'cortex',
    isDone:true,
}]

const isNotdone= myList.filter((todo)=>{
    if(todo.isDone===false)
    console.log(todo.title);
});
//console.log(isNotdone);