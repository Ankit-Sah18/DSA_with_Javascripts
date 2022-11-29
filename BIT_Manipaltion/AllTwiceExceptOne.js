quest:
// All Twice Except One 
// Description

// Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.

// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.

// Added Constraint -> Do in O(1) auxiliary space and linear time complexity.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — the size of the array A.

// The second line of each test case contains n integers (1 ≤ n ≤ 100000) - The elements of the array A.


// Output
// For each test case, print the answer: The unique element.


// Sample Input 1 

// 2
// 1
// 5
// 5
// 1 2 1 3 2
// Sample Output 1

// 5
// 3

  function   RemoveDuplicate(n,arr){

     let stk=[0];

     for(let i=0;i<n;i++)
     {
        stk=stk^arr[i]
     }

     console.log(stk)
  }


 function runProgram(input) {
    
    input=input.trim().split('\n')
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++)
    {
        let n=+input[line++];
        let arr=input[line++].trim().split(' ').map(Number)

        RemoveDuplicate(n,arr)
    }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  2
  1
  5
  5
  1 2 1 3 2

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