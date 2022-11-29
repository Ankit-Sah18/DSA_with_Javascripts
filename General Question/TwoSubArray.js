
// Two subarrays 
// Description

// Given a string S of size N having all lowercase characters. Count all the substrings of S such that in each substring no character occurs more than twice.


// Input
// First line: Single integer T denoting the number of test cases.
// For each test case:
// First line: Single integer denoting the value of N.
// Next line contains the string S.
// Constraints:
// 1 <= T<= 10
// 1<= N <= 100000

// Output
// For each test case, print in a new line a single integer denoting the number of substrings.


// Sample Input 1 

// 1
// 5
// aabba
// Sample Output 1

// 14
// Hint

// Given for the only test case,
// N = 5
// S : "aabba"

// Only the substring "aabba" of S has occurrences character 'a' 3 times which is greater than 2. Rest all substrings have all its constituent characters not more than twice. Hence the answer is 14.

  function TwoSubArray(n,str){
    
    let start=0;
    let end=0;
    let obj={};
    let count=0;

    while(end<n)
    {
        if(obj[str[end]]==undefined || obj[str[end]]<2)
        {
           
            if(obj[str[end]]==undefined)
            {
                console.log(obj[str[end]])
                obj[str[end]]=1;
            }
            else
            {
                obj[str[end]]++
                console.log(obj[str[end]])
            }
            end++
            count+=(end-start)
        }
        else
        {
            obj[str[start]]-=1
            start++
        }
       
    }

    console.log(count)

    for(let i=0;i<n;i++)
    {
        let bag="";
        for(let j=i;j<n;j++)
        {
            bag+=str[j];

            console.log(bag)
        }
    }

  }

  function runProgram(input) {
    
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++)
    {
        let n=+input[line++];
        let str=input[line++].trim()

        TwoSubArray(n,str)
    }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  1
  5
  aabba

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