let arr1:number[] = [1,2,3,4,5];
arr1.push(11);
console.log(arr1);

let arr2:string[] = [];
arr2[0] ="rahul";
arr2[1] ="Ritu";
arr2[2]="mohit";

console.log(arr2);
arr2.forEach((i) => console.log(i));


//mixed array
let arr3:(number|string)[] = [1,2,3,4,"abs","fdgd"];
arr3.push(2,3,4,"abgv");
console.log(arr3);
arr3.forEach((i)=>console.log(i));



let arr4: readonly number[] = [1,2,3,4,5];
console.log(arr4);