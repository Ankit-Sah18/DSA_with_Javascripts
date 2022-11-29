// question -Binary Equivalent - Recursive
// input=12
let n=15;
let bag=''
const Binery=(n)=>{
   
     if(n==1||n==0)
     {
         return bag+=n
     }

        bag+=n%2
     let x= Binery(Math.floor(n/2))
}

let z= Binery(n)

let ans= bag.split('').reverse()

console.log(ans.join(''))