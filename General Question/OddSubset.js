// quest:
// Odd subset 
// Description

// Given an integer array, return the count of all the subsets of the array, where the sum of all the elements in the subset is odd.


// Input
// The first line of the input contains N, the size of the array.

// The next line contains N space separated integers denoting the elements of the array.



// Constraints

// 1 <= N <= 20

// -20 <= A[i] <= 20


// Output
// Print the count of all the subsets where the sum of all the elements in the subset is odd.


// Sample Input 1 

// 3
// 1 2 3
// Sample Output 1

// 4
// Sample Input 2 

// 2
// 2 4
// Sample Output 2

// 0
// Hint

// In the sample test case, the size of the array is 3, and the all the possible subsets of the array are,

// []

// [1]

// [2]

// [1, 2]

// [3]

// [1, 3]

// [2, 3]

// [1, 2, 3]

// The subsets with odd sum are [1],[3],[2,3], and [1,2], therefore, the count of subsets with odd sum are 4.


   function OddSubset(arr,cur,ans){
    let count=0;
      function checkOdd(arr1)
      {
       
        let sum=0;
        for(let i=0;i<arr1.length;i++)
        {
            sum+=arr1[i]
        }
        if(sum%2!==0)
        {
            count++
        }
    //   console.log(count)
    // return count
        
      }

    //   function checkOddSubet(n,arr,ans,cur)
    //   {
    //     if(ans.length>0)
    //     {
    //         checkOdd(ans)
    //     }

    //     if(cur=arr.length)
    //     {
    //         return 
    //     }

    //     for(let i=cur;i<arr.length;i++)
    //     {
    //         ans.push(arr[i])
    //         checkOddSubet(n,arr,ans,i+1)
    //         ans.pop()

    //     }
    //   }

    function oddSubSet(arr,ans,cur)
    {
        if(ans.length>0)
        {
            checkOdd(ans)
        }
        
        if(cur==arr.length)
        {
            return 
        }
        
        for(let i=cur;i<arr.length;i++)
        {
            ans.push(arr[i])
            oddSubSet(arr,ans,i+1)
            ans.pop()
            
        }
        
    }

      let x=oddSubSet(arr,ans,cur);
    //   console.log(x)
      console.log(count)

   }
 function runProgram(input) {
    
    input=input.trim().split('\n')
    let n=+input[0];
    let arr=input[1].trim().split(' ').map(Number)
    let cur=0;
    let ans=[];

    OddSubset(arr,cur,ans)
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`

2
2 4

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