function add (x:number,y:number){
    return x+y;
}
console.log(add(5,10));
function add1 (x:string,y:string){
    return x+y;
}
console.log(add1("4","23"));


let sub =(x:number,y:number):void=>console.log(`result : ${x-y}`);
sub(34,32);