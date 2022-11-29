
// Maximize Substring Ended
// Description

// Manu Loves to play with alphabets.One day his friend gave him a string and tells him to try the following task:

// Given a string S consisting of lowercase English alphabets of size N, he has to find the lexicographically maximum substring of this string .Help him finding the substring.


// Input
// Input Format :

// The first line contains a single integer N denoting the length of string S. The next line contains the string S.

// Constraints :

// 1 <= N <= 5000


// Output
// Print the lexicographically maximum substring of String S on a single line.


// Sample Input 1 

// 6
// ababaa
// Sample Output 1

// babaa

    function  MaxmizeSubString(n,str){

        let max="";

        for(let i=0;i<n;i++)
        {
            if(max.localeCompare(str.substring(i))<=0)
            {
                max=str.substring(i);
            }
        }

        console.log(max)
    }

 function runProgram(input) {
    
    input=input.trim().split('\n');
    let n=+input[0];
    let str=input[1].trim()

    MaxmizeSubString(n,str)
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  6
  ababaa

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