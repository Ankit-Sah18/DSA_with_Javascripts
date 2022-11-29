
// New York Skylines Ended
// Description

// Gini and Johnny are on a trip to New York, and are in awe of the marvellous tall buildings of the city

// So, they decided to play a game

// They decided to give every building a rating, such that

// If the building is greater than the building to its left, and the building to its right, it gets 2 point

// If the building is greater than one of the buildings to it's left or the buildings to it right, it get's 1 point

// If the building is smaller than the building to it's left and the building to it's right, it gets 0 point

// Given an array, which gives the height of the buildings, find out the score of each building

// Note : You don't have to take the input
// Just complete the function and print the required function

// Input
// The first line of the input contains the valueT, the number of test cases

// For each test case, the first line contains the valueN, the number of buildings

// The next line contains the height of each building in the form ofNspace separated integers

// Constraints

// 1 <=T<= 10

// 2 <=N<= 10000

// 1 <=Height of building<= 1000


// Output
// For each test case, print the points scored by each of the buildings on a single line

// Sample Input 1 

// 2
// 5
// 1 4 3 2 7
// 2
// 1 3
// Sample Output 1

// 0 2 1 0 1 
// 0 1 
// Hint

// Screenshot 2022-06-05 at 8.16.57 PM.png

// In the sample test case, referring to the image given above
// 1. For the first building, it has only one neighbor, and it is smaller than the building to its right, hence the score is 0

// 2. For the second building, the height of the building is 4, 
// and it is greater than both the neighbors to it's left and right, hence the score is 2

// 3. For the next building, the height of the building is 3 and it is greater than the element to its right, 
// but smaller than the element to it's left, hence the score is 1

// 4. For the fourth building, the height of the building is 2, and it is smaller than 
// both the neighbors to it's left and right, hence the score is 0

// 5. For the last building, the height of the building is 7, and it has only neighbor to the left.
// Since, it is greater than the element to it's left, the score is 1
// Therefore, the required output is0 2 1 0 1
// Similarly, for the next array, the height of the first building is 1, and it is smaller than the only neighbor to the right, hence the score is 0

// For the next building, the height of the building is 3, which is greater than the neighbor to it's right, hence the score is 1


function   NewYourSkyLine(n,arr){


    // console.log(n,arr)

    let stk=[];
    for(let i=0;i<n;i++)
    {
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1])
        {
            stk.push(2)
        }
        else if(arr[i]>arr[i-1] || arr[i]>arr[i+1])
        {
            stk.push(1)
        }
        else{
            stk.push(0)
        }
    }

    console.log(stk)
}

function runProgram(input) {
    
    input=input.trim().split('\n')
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++)
    {
        let n=+input[line++]
        let arr=input[line++].trim().split(' ').map(Number)

        NewYourSkyLine(n,arr)
    }
    
}
if (process.env.USERNAME === "DELL") {
  runProgram(`
  2
  5
  1 4 3 2 7
  2
  1 3

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