// Unique Gift 
// Description

// You are visiting a friend at her housewarming party. When you arrive at her house, 
// you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands, 
// and since there aren't many gift shops nearby, most of them end up buying the same gift for her. 
// As more and more people keep joining the queue, you are curious to find the first unique gift in the line.
//  You sit and examine the row after a new person arrives; when he does, 
//  you examine the queue from front to back to find out which is the first different gift and add it to your list.

// Note-If after a new person arrives no gift is unique in the queue add '#' to the output

// Sample Input 1 

// 2
// abadbc
// abcabc
// Sample Output 1

// aabbdd
// aaabc#

//

  function  Unique_Gift(str){

      let queue=[];
      let obj={};
      let bag="";

      for(let i=0;i<str.length;i++)
      {
          if(obj[str[i]]==undefined)
          {
              obj[str[i]]=1
          }
          else
          {
              obj[str[i]]++
          }

          queue.push(str[i])

          while(queue.length!=0)
          {
            if(obj[queue[0]]>1)
            {
                queue.shift()
            }
            else
            {
                bag+=(queue[0]);
                break;
            }
          }

          if(queue.length==0)
          {
              bag+="#"
          }
      }
   
       console.log(bag)

  }



function runProgram(input) {
    var input = input.trim().split("\n");
 
    let N = +input[0];
 
    let line=1;

    for(let i=0;i<N;i++)
    {
        let str=input[line++].trim()

        Unique_Gift(str)
    }

   
 
   
    
   }
   if (process.env.USERNAME === "") {
     runProgram(`
     2
     abadbc
     abcabc
 
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