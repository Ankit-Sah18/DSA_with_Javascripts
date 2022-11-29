
// Question-
// Given a 2D square matrix, find the sum of elements in Principal and Secondary diagonals.
//  For example, consider the following 4 X 4 input matrix.

//  Input : 
// 4
// 1 2 3 4
// 4 3 2 1
// 7 8 9 6
// 6 5 4 3
// Output :
// Principal Diagonal: 16
// Secondary Diagonal: 20

// sum=16+20 =36

   function  DiagonalSum(n,mat){
      let dsum1=0;
      let dsum2=0;

      for(let i=0;i<n;i++)
      {
        for(let j=0;j<n;j++)
        {
            if(i==j)
            {
                dsum1+=mat[i][j]
            }
            if((i+j)==(n-1))
            {
                dsum2+=mat[i][j]
            }
        }
      }

      console.log(dsum1,dsum2)
      console.log(dsum1+dsum2)


   }



function runProgram(input) {
    
    input=input.trim().split('\n');
    let n=+input[0];
    let line=0;

    let mat=[];

    for(let i=1;i<=n;i++)
    {
        mat.push(input[i].trim().split(' ').map(Number))
        line++
    }

       DiagonalSum(n,mat)
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  4
  1 2 3 4
  4 3 2 1
  7 8 9 6
  6 5 4 3

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