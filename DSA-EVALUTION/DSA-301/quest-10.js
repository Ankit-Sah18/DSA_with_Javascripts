

// Substrings ending with K Ended
// Description

// You are given a string A, of length N, and a character K. Find the count of all the substrings of A, which end at K.

// Note: The string A contains only lower case characters.

//  let str="ankit"

 let str=[2,4,5,6,2,4,5]
//  let k="a"

let k=2;

 let count=0;

 for(let i=0;i<str.length;i++)
 {
     let bag=""

     for( let j=i;j<str.length;j++)
     {
         bag+=str[j]

        //  console.log(bag)

        if(bag[bag.length-1]==k)
        {
            console.log(bag)
            count++
        }
     }
 }

 console.log(count)