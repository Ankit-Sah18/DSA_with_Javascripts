// Next Greater Element Ended
// Description

// Given an array of N elements, find the next greater element for each element in the array, print -1 
// if it does not exits. Refer to the sample I/O for better understanding

// Sample Input 1 

// 1
// 4
// 1 3 2 4
// Sample Output 1

// 3 4 4 -1

let arr=[1,3,2,4]

let n=arr.length;
let stk=[];

let bag=[];

for(let i=n-1;i>=0;i--)
{
    while(stk.length!=0 && stk[stk.length-1]<=arr[i])
    {
        stk.pop()
    }

    if(stk.length==0)
    {
        // bag+=-1+' '
        bag.push(-1)
    }

    else if(stk[stk.length-1]>arr[i])
    {
        // bag+=stk[stk.length-1]+' '

        bag.push(stk[stk.length-1])
    }

    stk.push(arr[i])
}

// console.log(bag)

let x=bag.reverse().join(' ')
console.log(x)

