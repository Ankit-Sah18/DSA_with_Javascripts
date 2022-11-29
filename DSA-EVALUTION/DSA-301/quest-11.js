

// Masai Packers & Movers Ended
// Description

// Finally, India found the vaccine, and things have started getting normal. Offices are opening up,
//  and therefore, you have to shift to Bangalore. Now, to transport your stuff, you hire Masai Packers & Movers. 
//  The company has N trucks, and each truck can hold only a certain amount of weight only.
//   Also, because of surge in prices of Fuel, the company has implemented a new policy, that the truck will be granted to the customer,
//    only if the truck is completely occupied, and no extra space is left.

// You have to transport K units of weight, since each truck will take the weight exactly equal to its capacity, find the number of ways, in which you can transport K units of weight.

// Note : Any truck can be sent any number of times.


// Sample Input 1 

// 3 3
// 1 2 3
// Sample Output 1

// 4

  function   MasaiMover_packer_1(arr,n,k){

    //   console.log(n,k,arr)

      let count=0;

      function MoverPacker(arr,n,k)
      {
          if(k<0)
          {
              return 0
          }

          if(k===0)
          {
               count++
              return 
          }

          for(let i=0;i<n;i++)
          {
              MoverPacker(arr,n,k-arr[i])
          }

      }

        let z=MoverPacker(arr,n,k)
      console.log(count)
  }

function runProgram(input) {
    
    input=input.trim().split("\n")
    let [n,k]=input[0].trim().split(" ").map(Number)

    let arr=input[1].trim().split(" ").map(Number)

    MasaiMover_packer_1(arr,n,k)

    
    
}
if (process.env.USERNAME === "Dell") {
  runProgram(`
  3 3
1 2 3

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

