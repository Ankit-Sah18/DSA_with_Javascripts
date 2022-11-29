// question:-

// Given the array prices where prices[i] is the price of the ith item in a shop.
//  There is a special discount for items in the shop, if you buy the ith item, 
//  then you will receive a discount equivalent to prices[j] where j is the minimum index such 
//  that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

//  Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]



  function SpecilaDiscount(arr){
      
      let stk=[];
      let bag=[];

      for(let i=arr.length-1;i>=0;i--)
      {
        while(stk.length>0 && stk[stk.length-1]>=arr[i])
        {
            stk.pop();
        }

        if(stk.length==0)
        {
            bag.push(0)
        }
        else
        {
            bag.push(stk[stk.length-1])
        }

        stk.push(arr[i])
      }

      console.log(bag)

      bag=bag.reverse()
      let ans="";

      for(let i=0;i<bag.length;i++)
      {
          ans+=arr[i]-bag[i]+" "
      }


      console.log(ans)

  }  


function runProgram(input) {
  
   let arr=input.trim().split(' ').map(Number)

     SpecilaDiscount(arr)
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  
 8 4 6 2 3

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


//   function  Sum(n,arr){

//     console.log(sum)
//   }

// function runProgram(input) {
    
//     input=input.trim().split('\n');
//     let n=+input[0];
//     let arr=input[1].trim().split(' ').map(Number)

//     Sum(n,arr)
    
// }
// if (process.env.USERNAME === "DELL") {
//   runProgram(`
//   5
//   5 4 1 3 2

// `);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0) ;
//   });
// }