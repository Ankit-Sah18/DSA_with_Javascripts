// Print Matrix Rows Ended
// Description

// You are given a matrix of size N x M. You have to print all the even indexed rows.

// Note: Indexing in the matrix starts from 0.

// Sample Input 1 

// 3 3
// 1 2 3 
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 
// 7 8 9 

// 1 4 7
// 3 6 9

function  PrintMatrixRow(n,m,mat){

    // for(let i=0;i<n;i++)
    // {
    //     if(i%2==0)
    //     {
    //         let arr=mat[i]

    //         let arr2=arr.join(' ')

    //         console.log(arr2)
    //     }
    // }

     for(let i=0;i<n;i++)
     {
         var bag=""
         for(let j=0;j<m;j++)
         {
             if(j%2==0)
             {
                //  let arr=mat[j]

                //  console.log(arr.join(' '))
                bag+=mat[i][j]+' '
             }
         }
         console.log(bag)
        
        }

      
}


function runProgram(input) {
    input=input.trim().split('\n')
    
     
    let [n,m]=input[0].split(" ").map(Number)

    let mat=[];
    let line=1;

    for(let i=0;i<n;i++)
    {
        mat.push(input[line++].trim().split(' ').map(Number))
    }

    PrintMatrixRow(n,m,mat)
    
}
if (process.env.USERNAME === "Dell") {
  runProgram(`
  3 3
  1 2 3 
  4 5 6
  7 8 9

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