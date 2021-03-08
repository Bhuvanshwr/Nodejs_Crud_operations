console.log("HI");
getUser((list)=>{
    console.log(list);
})
console.log("Bye")

function getUser(callback){
    setTimeout(() => {
        callback(['qwe','qwdqw','qwdqwd']);
    }, 1000);

}