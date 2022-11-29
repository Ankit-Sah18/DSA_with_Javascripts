// You are given a string A, of length N, and a character K. Find the count of all the substrings of A, which end at K.

// Note: The string A contains only lower case characters.

// Sample Input 1 

// 1
// 4
// aman
// a
// Sample Output 1

// 4

function SubstringOfKEnding(n,str,k){
     
    var count=0
    for(let i=0;i<str.length;i++)
    {
        let bag=""

        for(let j=i;j<str.length;j++)
        {
            bag+=str[j]

            // console.log(bag)

            if(bag[bag.length==k])
            {
                count++
            }
        }
    }

    console.log(count)
}


function runProgram(input) {
    
    input=input.trim().split("\n")
    let tc=+input[0]

    let line=1;

    for(let i=0;i<tc;i++)
    {
        let n=+input[line++]
        let str=input[line++].trim()

        let k=input[line++].trim()

        SubstringOfKEnding(n,str,k)
    }
    
}
if (process.env.USERNAME === "Dell") {
  runProgram(`
  1
  4
  aman
  a

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