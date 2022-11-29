
//   Sum Exists or Not 
//   Description
  
//   Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.
  
//   If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.
  
  
//   Input
//   Input Format :
  
//   The first line of input contains an integer N - denoting size of the array.
  
//   The second line contains the N space seperated integers.
  
//   The third line of input will contain S - the required Sum value.
  
//   Constraints :
  
//   1<=n<= 18
  
//   1<=A[i]<=10^9
  
  
//   Output
//   Print "yes" or "no" without quotes.
  
  
//   Sample Input 1 
  
//   9
//   1 2 3 4 5 6 7 8 9
//   5
//   Sample Output 1
  
//   yes

  function SumExistOrNot(n,arr,s){

    let a=[0];

    for(let i=0;i<n;i++)
    {
        a.forEach((x)=>{
        a.push(x + arr[i])

        })
    }

    console.log(a.includes(s)==true ? "yes" : "no")
  }

  function runProgram(input) {
    
    input=input.trim().split('\n')
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number)
    let s=+input[2]

    SumExistOrNot(n,arr,s)
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
//   9
//   1 2 3 4 5 6 7 8 9
//   5
9
1 2 3 4 5 6 7 8 9
111

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