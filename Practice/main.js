// const max =(Numbers)=>{
//     let result = Numbers[0]
//     for(const number of Numbers){
//         if(number>result){
//             result = number
//         }
//     }
//     return { result}

// }
// console.log(max([1,2,3,4,5,3]));

// //----------------------------

// const freq =(phrase)=>{


//         for(const letter of phrase){
//             // console.log(phrase);

//             if(letter in freq){
//                 freq[letter] = freq[letter] + 1;
//                 // freq[letter] +=1
//             }else {
//                     freq[letter]=1
//             }
            
//         }
//         return freq;
// }
// console.log(freq('haha'))

// //------------------------------

// const wordfreq = (phrase)=>{
//     let freqe ={}
//    let words = phrase.split(' ');
//     // console.log(words)
//     for(const word  of words){
//       if(word in freqe){
// freqe[word] = freqe[word] + 1;
//       } else{
// freqe[word] = 1;
//       }
//     }
//     return freqe;
// }
// console.log(wordfreq('hey how are you and hey how '))


//-------------------------------------

//ARRAY METHOD 
//1.MAP 2.FILTER 3.REDUCE
// let arr = [1,2,3,4,5].map(number =>number*2)
// console.log(arr);

//Filters



const filter =(numbers,graterThan)=>{
   let result =[]
   for (const number of numbers){
    if(number>graterThan){
        result.push(number)
    }
   }
   return result
}
console.log(filter([1,2,3,4,5,6],2))


//
const nums = [1,2,3,4,5,6]
console.log(nums.filter(num =>num>3))


//Reduce








