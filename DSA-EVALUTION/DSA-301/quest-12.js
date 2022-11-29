
// Signal's Capacity Ended
// Description

// There are many signal towers present in Bangalore.Towers are aligned in a straight 
// horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and
//  Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is less than or 
//     equal to the height of the given tower) + 1}.

// You need to write a program that finds the power of each tower.

// Sample Input 1 

// 2
// 7
// 100 80 60 70 60 75 85
// 5
// 3 5 0 9 8
// Sample Output 1

// 1 1 1 2 1 4 6
// 1 2 1 4 1

function  SingleCapicity(n,arr){

    let stk=[];
    let bag=[];

    for(let i=0;i<n;i++)
    {
        while(stk.length>0 && arr[stk[stk.length-1]]<=arr[i])
        {
            stk.pop()
        }

        if(stk.length==0)
        {
            bag.push(i+1)
        }

        else{

             bag.push(i-stk[stk.length-1])
        }

        stk.push(i)
    }

    console.log(bag.join(" "))
}

function runProgram(input) {
    
    input=input.trim().split("\n")
    let tc=+input[0];

let line=1;

for(let i=0;i<tc;i++)
{
    let n=+input[line++]
    let arr=input[line++].trim().split(" ").map(Number)

     SingleCapicity(n,arr)
}
    
}
if (process.env.USERNAME === "Dell") {
  runProgram(`
  2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8

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