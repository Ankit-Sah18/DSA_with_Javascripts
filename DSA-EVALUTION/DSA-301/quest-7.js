// Motu to Potlu house Ended
// Description

// Motu decided to visit his friend Potlu. It turned out that the Motu's house is located at point 0 and his
//  friend's house is located at point x (x > 0) of the coordinate line. In one step the Motu can move 1, 2, 3, 4 or 5 positions forward.

// Determine, what is the minimum number of steps he need to make in order to get to his friend's house.

// Sample Input 1 

// 26
// Sample Output 1

// 6

function    MotuPatulu(N){

    // console.log(N)

    // let arr=[1,2,3,4,5]

    // // let count=0;
    // let min=Infinity

    // for(let i=0;i<arr.length;i++)
    // {
    //     let x=Math.ceil(N/arr[i])
       
    //     if(x<min)
    //     {
    //         main=x
    //     }
    // }

    // console.log(min)

    let arr=[1,2,3,4,5]
    let min=Infinity
    for(let i=0;i<arr.length;i++)
    {
        // console.log(arr[i])
        
        let x=Math.ceil(N/arr[i])
        // console.log(x)
          if(x<min) 
          {
              min=x
          }
    }
    console.log(min)

}


function runProgram(input) {
    
    let N=+input;

    MotuPatulu(N)
    
}
if (process.env.USERNAME === "Dell") {
  runProgram(`
 26

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