


function runProgram(input){
    

    const LinkedListNode = class {
        constructor(nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    }

    console.log(head)
    
}


 

if (process.env.USER === "") {
  runProgram(`
    1
    5
    1
    2
    3
    4
    5
  
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
    process.exit(0);
  });
}