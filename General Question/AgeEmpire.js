// Solve Age of empires Ended
// Description

// You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.

// All workers will be grouped in the association with size 2, so a total of N associations have to be formed.

// The building speed of the i-th worker is A[i].

// To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

// You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.


// Input
// First line contains an integer N, representing the number of associations to be made.

// Next line contains 2N space separated integers, denoting the building speeds of 2N workers.

// N <= 50000

// A[i] <= 10000


// Output
// Print the maximum value possible of the sum of building speeds of all the associations.


// Sample Input 1 

// 2
// 1 3 1 2
// Sample Output 1

// 3

function  AgeEmpire(n,arr){

    arr=arr.sort((a,b)=>a-b)

    let sum=0;

    for(let i=0;i<arr.length;i=i+2)
    {
          if(arr[i]<=arr[i+1])
          {
            sum+=arr[i]
          }
    }

    console.log(sum)
}


 function runProgram(input) {
    
    input=input.trim().split('\n')
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number)

    AgeEmpire(n,arr)
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  2
  1 3 1 2

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