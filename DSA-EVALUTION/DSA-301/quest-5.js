// question:-

// Repeated and Missing Ended
// Description

// Given an array of size n. Array elements are in the range from 1 to n. In the given array, 
// one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.


// Sample Input 1 

// 3
// 5
// 1 2 3 3 4
// 2
// 1 1
// 3
// 1 2 2
// Sample Output 1

// 5 3
// 2 1
// 3 2


   let arr=[1,2,3,3,4];
   let n=arr.length;

   let obj={};
   for(let i=0;i<n;i++)
   {
       if(obj[arr[i]]==undefined)
       {
           obj[arr[i]]=1
       }
       else
       {
           obj[arr[i]]++
       }

       
   }

//    console.log(obj)
let bag=[]
for(let key in obj)
{
  bag.push(key)
}
for(let key in obj)
{
  if(obj[key]>1)
  {
      var x=key
  }
}

// let sum= Math.ceil((n(n+1)/2))
let sum=0;
for(let i=1;i<=n;i++)
{
    sum+=i
    // sum-=bag[i]
}

for(let i=0;i<bag.length;i++)
{
    sum-=bag[i]
}
// console.log(sum)

// let z=[...x,...sum]
// console.log(sum,x)

// let arr1=[1,2,6,3]
// let arr2=[5,9,8,5]


// let p=[...arr1,...arr2]

// let s=p.sort((a,b)=>a-b)

// console.log(s.join(' '))

// function Repeated_Missing(n,arr){
//     console.log(n,arr)
// }

// function runProgram(input){
    
//     input=input.trim().split('\n')

//     let tc=+input[0];
//     let line=1;
//     for(let i=0;i<tc;i++)
//     {
//         let n=+input[line++];
//         let arr=input[line++].trim().split(' ').map(Number)

//         Repeated_Missing(n,arr)

//         console.log(n,arr)
//     }
    
// }


 

// if (process.env.USER === "") {
//   runProgram(`
//   3
//    5
//   1 2 3 3 4
//   2
//   1 1
//    3
//   1 2 2
//   `);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// function alanChri(arr){
//     // console.log(arr);
//     var stack = [];


//     for(var i = 0; i < arr.length; i++ ){
//         if(arr[i] == "#" && stack.length > 0){
//             stack.pop();
//         }

//         if(arr[i] != "#"){
//             stack.push(arr[i]);
//         }
        
//     }

//     console.log(stack.join(""));
// }


// function runProgram(input) {
//    var input = input.trim().split("\n")

//    var testCases = +input[0];
// var line=1;
//    for(var i = 0; i < testCases; i++){
//         var arr = input[line].trim().split("");
// line++
//         alanChri(arr);
//    }
   
//   }
//   if (process.env.USERNAME === "") {
//       runProgram(`2
// ab#d
// a#bc`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }