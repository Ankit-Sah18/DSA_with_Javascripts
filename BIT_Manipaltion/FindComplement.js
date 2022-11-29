

// quest:
// Given a non-negative integer n, find out the complement of a number. The complement operation is to flip the bits of the binary representation of the number.

// For example -

// 12 -> 1100 -> Complement -> 0011 -> 3


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (0 ≤ n < 2^32).


// Output
// For each test case, print the answer: The complement of the number.


// Sample Input 1 

// 3
// 5
// 1
// 2147483648
// Sample Output 1

// 2
// 0
// 2147483647

function Complement(n){
//    console.log(n)
    function find(n)
    {
       let num=(Math.floor(Math.log(n)/Math.log(2)))+1

       let a= Math.abs(((1 << num) - 1) ^ n)

       return a
    }

    let x=find(n);
    console.log(x)
}

function runProgram(input) {
    
    input=input.trim().split("\n")
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++)
    {
        let n=+input[line++]
        Complement(n)
        // console.log(n)
    }
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  3
  5
  1
  2147483648
    
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