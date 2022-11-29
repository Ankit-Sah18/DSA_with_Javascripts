
// Count Duration 
// Description

// Given 4 variables SH,SM,EH and EM  each separated by space(SH=starting hr, SM=starting min, EH=ending hr, EM=ending min), calculate and print the difference between the two times


// Input
// Input Format

// First line will be given by N test cases

// Next N line will be given SH,SM,EH and EM  each separated by space(SH=starting hr,SM=starting min, EH=ending hr, EM=ending min)

// Constraints

// N < 100


// Output
// Output Format

// N lines with duration HH MM(hours and minutes separated by space)


// Sample Input 1 

// 2
// 1 44 2 14
// 2 42 8 23
// Sample Output 1

// 0 30
// 5 41

  function CountDuration(h1,m1,h2,m2){

          h1=h1*60;
          h2=h2*60;
          let a;

          if(m2>=m1)
          {
            a=m2-m1;
          }
          else
          {
            a=m2+60-m1;
            h2=h2-60;
          }

         var h3=h2-h1;

         if(h3>0)
         {
            h3=h3/60;
         }

         console.log(h3,a)
  }

   function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++)
    {
        let [h1,m1,h2,m2]= input[line++].trim().split(' ').map(Number);

        CountDuration(h1,m1,h2,m2)
    }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  2
  1 44 2 14
  2 42 8 23

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