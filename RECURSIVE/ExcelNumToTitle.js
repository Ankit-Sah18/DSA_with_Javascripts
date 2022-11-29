
// Excel number to title 
// Description

// Given a number, convert it to excel title

// 1 -> A

// 2 -> B

// .....

// AA -> 27

// .....


// Input
// 1<=T<=10

// 1<=N<=1000000


// Output
// output a string, ans to the question for each test case.


// Sample Input 1 

// 3
// 1
// 27
// 701
// Sample Output 1

// A
// AA
// ZY

  function  ExcelNumberToTitle(n){
      
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function convet(n)
    {
        if(n<26)
        {
            return str[n-1]
        }
        else
        {
            let q=Math.floor(n/26);
            let r=n%26;

            if(r==0)
            {
                if(q==1)
                {
                    return str[26-r-1]
                }
                else
                {
                    return convet(q-1) + str[26-r-1]
                }
            }
            else
            {
                return convet(q)+str[r-1]
            }
        }
    }

    let x=convet(n)
    console.log(x)

  }


 function runProgram(input) {
    
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1;

    for(let i=0;i<tc;i++)
    {
        let n=+input[line++]

        ExcelNumberToTitle(n)
    }
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  3
  1
  22
  701

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
