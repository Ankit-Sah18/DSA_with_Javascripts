

    function  StoneGame(n,arr){

        
    }
function runProgram(input) {
    
    input=input.trim().split('\n')
    let tc=+input[0];
    let line=1;

    for(let i=0;i<tc;i++)

    {
        let n=+input[line++];
        let arr=input[line++].trim().split(" ").map(Number)

        StoneGame(n,arr)
    }

    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  2
  5
  100 8 97 2 1
  5
  100 9 96 2 1

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