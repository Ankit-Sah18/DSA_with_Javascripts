// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) 
// for which the stock price was less than or equal to today's price.
   
// input;
// 10 4 5 90 120 80
// 100 80 60 70 60 75 85


// output
// 1 1 2 4 5 1 
// 1,1,1,2,1,4,6





   function StockSpan(arr)
   {
        // console.log(arr)

        let ans=[];
        let stk=[];

        for(let i=0;i<arr.length;i++)
        {
            let count=1;

            while(stk.length >0 &&  arr[i]>=arr[stk[stk.length-1]])
            {
                count+=ans[stk[stk.length-1]];
                stk.pop();
            }
          

            stk.push(i)

            ans[i]=count;

        }

        console.log(ans.join(' '))

   }

   function runProgram(input) {
    
    input=input.trim().split('\n');
    let tc=+input[0];
    let line=1;

    for(let i=0;i<tc;i++)
    {
        let arr=input[line++].trim().split(' ').map(Number);

        StockSpan(arr)
    }
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  2
  10 4 5 90 120 80
  100 80 60 70 60 75 85


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