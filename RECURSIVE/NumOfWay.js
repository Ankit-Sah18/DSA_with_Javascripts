  
//   Number of ways problems -10:22:49
//   Description
  
//   Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.
  
  
//   Input
//   input Format
  
//   Input contains integer N that is number of steps
  
//   Constraints
  
//   N <= 30
  
  
//   Output
//   Output Format
  
//   Output for each integer N the no of possible ways w.
  
  
//   Sample Input 1 
  
//   4
//   Sample Output 1
  
//   7
  
  
  function   NumOfWay(n){

      function check(n)
      {
        if(n<0)
        {
            return 0;
        }
        if(n==0)
        {
            return 1
        }

        let x= check(n-1)+check(n-2)+check(n-3)
         return x
      }

      let z=check(n);

      console.log(z)
  }

  function runProgram(input) {
    let n=+input.trim()
    NumOfWay(n)
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
 4

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