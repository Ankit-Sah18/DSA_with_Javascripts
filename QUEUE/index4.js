// question:-

// There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

// There are N operations that can be performed on this line. The operations are of following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)


// Sample Input 1 

// 5
// E 2
// D
// D
// E 3
// D
// Sample Output 1

// 1
// 2 0
// -1 0
// 1
// 3 0


// 
  
 function Buy_Ticket(arr1,arr2){

      let queue=[];

      for(let i=0;i<arr1.length;i++)
      {
          if(arr1[i]=="E")
          {
              queue.push(arr2[i])

              console.log(queue.length)
          }

          else if(arr1[i]=="D")
          {
              if(queue.length==0)
              {
                  console.log(-1+" "+(queue.length))
              }
              else
              {
                  console.log(queue[0]+" "+(queue.length-1))
              }

              queue.shift()
          }
      }
 }

function runProgram(input) {
   var input = input.trim().split("\n");

   let N = +input[0];

let line=1;
let arr1=[];
let arr2=[];
for(let i=0;i<N;i++)
{
    let arr=input[line].trim().split(' ')
    arr1.push(arr[0])
    arr2.push(arr[1])

    line++
}

   Buy_Ticket(arr1,arr2)
   
  }
  if (process.env.USERNAME === "Dell") {
    runProgram(`
    5
  E 2
  D
  D
  E 3
  D

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