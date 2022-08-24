function sayHii(){
    return new Promise((resolve, reject)=>{
        console.log ("let me check my Calender......");
        setTimeout(() =>{
        const err = false;
    if(!err){
        resolve("ok will meet")
    }else{
        reject("sorry");
    }
}, 3000);
});
}

//console.log(syHii();
// consume the promises

sayHii()
.then((val) => console.log(val))
.catch((err) => console.log(err));