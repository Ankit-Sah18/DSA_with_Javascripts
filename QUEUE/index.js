


// you need to implement a queue data structure with a list using plain list methods. You can only use list.append() and list.pop() methods in this question.

// Note-You can't uselist.pop(index) too in this question.


// Input
// The first line contains the number of operations (t).

// Next t lines contains commands for the queue.

// Eg- E 3 means add 3 in the queue

// D means to remove the front element of the queue and print it on the screen

// Note-If the queue is empty print- 'Empty' (Without the quotes)

// sample Input;


// E 2
// E 3
// D
// D

let arr=[['E','2'],['E','3'],['D'],['D']];

let n=arr.length;

let q=[];
let front =0;
let rear =0;

for(let i=0;i<n;i++)
{
    if(arr[i][0]=="E")
    {
        q[rear]=arr[i][1]

        rear++
    }
    else if(arr[i][0]=="D")
    {
        if(front===rear)
        {
            console.log("Empty")
        }
    }
    else{
       console.log(q[front]) 
        front++
    }
}