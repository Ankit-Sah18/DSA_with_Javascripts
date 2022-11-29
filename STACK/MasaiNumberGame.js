

//  You are given an array A of N integers. Now, two functions F(X) and G(X) are defined:

//  F(X) : This is the smallest number Z such that X < Z <= N and A[X] < A[Z]
 
//  G(X) : This is the smallest number Z such that X < Z <= N and A[X] > A[Z]
 
//  Now, you need to find for each index i of this array G(F(i))
 
//  , where 1 <= i <= N. If such a number does not exist, for a particular index i, output -1 as its answer. If such a number does exist, output  A[G(F[i])]
 
 
//  Input
//  Input Format
 
//  The first line contains a single integer N denoting the size of array A. Each of the next N lines contains a single integer, where the integer on the line denotes A[i]. Input Format
 
//  Constraints
 
//  Print N space separated integers on a single line, where the *i* th integer denotes A[G(F(i))] or -1, if G(F(i)) does not exist.
 
 
//  Output
//  Output Format
 
//  1 <= N <= 30000
 
//  0 <= A[i] <= 10^18
 
 
//  Sample Input 1 
 
//  8
//  3
//  7
//  1
//  7
//  8
//  4
//  5
//  2
//  Sample Output 1
 
//  1 4 4 4 -1 2 -1 -1
   function MasaiNumberGame(arr){
       
    let stk=[];
    let bag=[];
    let stk2=[];
    let bag2=[];
    let n=arr.length;

      for(let i=n-1;i>=0;i--)
      {
        while(stk.length>0 && arr[stk[stk.length-1]]<=arr[i])
        {
            stk.pop();
        }

        if(stk.length==0)
        {
            bag.push(-1);
        }
        else
        {
            bag.push(stk[stk.length-1])
        }

        stk.push(i)

          while(stk2.length>0 && stk2[stk2.length-1]>=arr[i])
          {
            stk2.pop();
          }

          if(stk2.length==0)
          {
            bag2.push(-1);
          }
          else{

            bag2.push(stk2[stk2.length-1])
          }

          stk2.push(arr[i])
      }

        bag=bag.reverse();
        bag2=bag2.reverse();

        console.log(bag)
        console.log(bag2)

        let ans=[];

        for(let i=0;i<n;i++)
        {
            if(bag[i]==-1)
            {
                ans.push(-1)
            }
            else
            {
                ans.push(bag2[bag[i]])
            }
        }

        console.log(ans)
   }

  function runProgram(input) {
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1;

    let arr=[];

    for(let i=0;i<tc;i++)
    {
        arr.push(Number(input[line++]));
    }

    MasaiNumberGame(arr)
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
   8
   3
   7
   1
   7
   8
   4
   5
   2

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