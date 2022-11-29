
function    MasaiMooverAndPacker(arr,n,k){
     let count=0;
    function fibo(arr,n,k)
    {
        if(k<0)
        {
            return 0
        }
        if(k==0)
        {
            count++
            return
        }

        for(let i=0;i<n;i++)
        {
            fibo(arr,n,k-arr[i])
        }
    }

    let x=fibo(arr,n,k)

    console.log(count)
}

function runProgram(input) {
    
    input=input.trim().split('\n');
    let [k,n]=input[0].trim().split(' ').map(Number);
    let arr=input[1].trim().split(' ').map(Number);

    MasaiMooverAndPacker(arr,n,k)
}
if (process.env.USERNAME === "DELL") {
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