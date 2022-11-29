quest:
// is it a power of 2 Ended
// Description

// Given a number n, print YES if it is a power of 2 else print NO.


// Input
// 1<=T<=10

// 1<=N<=100000000


// Output
// output a single integer, the answer to the question.


// Sample Input 1 

// 3
// 1
// 2
// 100
// Sample Output 1

// YES
// YES
// NO

 function ItsPowerOfTwo(n){

   function checkPower(n)
   {
    if(n==0)
    {
        return false;
    }
    let res=n&(n-1)
    if(res==0)
    {
        return true;
    }
    return false
   }

   let x= checkPower(n)
   if(x==true)
   {
    console.log("Yes")

   }
   else
   {
    console.log("No")
   }

   let a= n&(n-1)

   console.log(a)
   
 }



 function runProgram(input) {
    
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1 ;
    for(let i=0;i<tc;i++)
    {
        let n=+input[line++];

        ItsPowerOfTwo(n)
    }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
 
  3
  1
  2
  100
`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
  });
}