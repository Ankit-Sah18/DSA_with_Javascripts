
function PrintMaxNum(arr1){

    
}

function runProgram(input) {
    
    input=input.trim().split("\n")

    let tc=+input[0]
    let line=1;
    var arr1=[] 
    for(let i=0;i<tc;i++)
    {
       
        var arr=input[line++].trim().split(' ').map(Number)
        arr1.push(arr[0])
        
    }

    PrintMaxNum(arr1)

    
   
    
}
if (process.env.USERNAME === "Dell") {
  runProgram(`
 5
 1
 10
 19
 9876
 12345

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