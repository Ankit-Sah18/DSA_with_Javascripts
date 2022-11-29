
// Min and Max sum Ended
// Description

// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

// Do not use built-in functions to sort the array use selection sort Algorithm


// Input
// Input Format:

// First line contains an integer T denoting the number of testcases.

// First line of every testcase contains two integer N and M.

// Next line contains N space separated integers denoting the elements of array


// Constraints:

// 1<=t<=10

// 1<=N<=1000

// 1<=a[i]<=1000


// Output
// For every test case print your answer in new line


// Sample Input 1 

// 1
// 5 1
// 1 2 3 4 5
// Sample Output 1

// 4

   function  MinAndMaxSum(n,k,arr)
   {
     
    // <<--------this is sort selection------>>
       
       function Swap(i,j,arr)
       {
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
       }


       for(let i=0;i<n-1;i++)
       {
          let min=i;
          for(let j=i+1;j<n;j++)
          {
            if(arr[min]>arr[j])
            {
                min=j
            }
          }

          Swap(i,min,arr)
       }
 // <<--------this is sort selection------>>

     
    //    console.log(arr)

    //   <<---------Inbuilt Function-------->>

        //  arr=arr.sort((a,b)=>a-b)

        //  <<---------Inbuilt Function-------->>


        let min=0;
        let max=0;
        let count=0;

        for(let i=0;i<n-k;i++)
        {
            min+=arr[i]
        }

        for(let i=n-1;n-k>count;i--)
        {
            max+=arr[i]
            count++
        }

        console.log(max-min)
   }


 function runProgram(input) {
    input=input.trim().split('\n')
    let tc=+input[0];
    let line=1;

    for(let i=0;i<tc;i++)
    {
        let [n,k]=input[line++].trim().split(' ').map(Number)

        let arr=input[line++].trim().split(' ').map(Number)

        MinAndMaxSum(n,k,arr)
    }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  1
  5 3
  1 2 5 4 3

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