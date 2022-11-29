// Selection Sort Problem Ended
// Description

// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500


// Output
// Output the numbers given after sorting it in increasing order


// Sample Input 1 

// 5
// 3 5 0 9 8
// Sample Output 1

// 0 3 5 8 9

function SortSelection(n,arr){

    for(let i=0;i<n-1;i++)
    {
        let min=i;

        for(let j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min])
            {
                min=j
            }
        }

        [arr[i],arr[min]]=[arr[min],arr[i]]
    }

    console.log(arr)
}


function runProgram(input) {
    input=input.trim().split('\n')
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number)
    
    SortSelection(n,arr)
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
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