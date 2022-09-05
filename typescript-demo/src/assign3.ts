function add2(...digits:any[]){
    var sum =0;
    for(let i of digits){
        sum+=i
    }
    return sum;


}
console.log(add2(1,4,6,7,33));