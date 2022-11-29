
// Ques is an array is given and we have to generate unique subsets.
// Input - [1 2 2]
// Output - [], [1], [1,2], [1,2,2], [2], [2,2]




  var obj = {}

function drSP(arr, new_arr, count){
    // console.log(arr, newArr, curr)

    if(new_arr.length >= 0){
        if(obj[new_arr.join(" ")] == undefined){
            obj[new_arr.join(" ")] = 1
            console.log(new_arr.join(" "));
        }
        
    }

    if(count > arr.length){
        return;
    }

    for(var i = count; i < arr.length; i++){
        new_arr.push(arr[i]);

        drSP(arr,new_arr,i+1);

        new_arr.pop();
    }
}


function runProgram(input) {
    
    var input = input.trim().split("\n");

   var N= +input[0];
   
    var arr = input[1].trim().split(' ').map(Number).sort((a, b) => { return a - b });
    
   var new_arr = [];
    var count = 0;
      drSP(arr,new_arr,count);
   
    
   }
   if (process.env.USERNAME === "DELL") {  
     runProgram(`
     3
     1 2 2
 
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