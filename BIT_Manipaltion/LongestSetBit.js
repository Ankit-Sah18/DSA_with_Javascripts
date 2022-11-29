
// Longest Consecutive Setbits
// Description

// Given a non-negative integer n, find out the length of the longest consecutive setbits occurring in the binary representation of the number given. There exist t test cases for each input.

// Added Constraint -> Try to do it in O(1) time and space complexity per testcase.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (0 ≤ n < 2^32).


// Output
// For each test case, print the answer: The required length.


// Sample Input 1 

// 4
// 1
// 0
// 4294967295
// 13
// Sample Output 1

// 1
// 0
// 32
// 2

function LongestSetBit(n){
//    by Bit Magic
    // let count=0;
    // while(n!=0)
    // {
    //     n=n&(n<<1)
        
    //         count++
        
    // }

    // console.log(count)

    // <<<<<<<<<<<<<<<-------->>>>>>>

    // by General method

    let longest=0;

    n=n.toString(2).split('').join('')
    n=n.split(0)

    // console.log(n)

    for(let i=0;i<n.length;i++)
    {
        if(n[i].length>longest)
        {
            longest=n[i].length
        }

    }

    console.log(longest)

}

function runProgram(input) {
   input=input.trim().split('\n')
   let tc=+input[0];
   let line=1;
   
   for(let i=0;i<tc;i++)
   {
    let n=+input[line++]

    LongestSetBit(n)
   }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  4
  1
  0
  4294967295
  13

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