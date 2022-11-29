// List and Queue 2 Ended
// Description

// You need to implement a list using queue data structure. You can only use queue.get() and queue.put() methods.

// Note- import and the use queue data structure.

// sample Input ;

// 3
// Push 4
// Push 5
// Pop

let arr=[['push','4'],['push','5'],['pop'],];

let n=arr.length;

let stk=[];

for(let i=0;i<n;i++)
{
    if(arr[i][0]==='push')
    {
        stk.push(arr[0][1])
    }

    else if(arr[i][0]==='pop')
    {
        if(stk.length==0)
        {
            console.log("Empty")
        }

    }
    else
    {
        console.log(stk[stk.length-1])

        stk.pop()
    }
}