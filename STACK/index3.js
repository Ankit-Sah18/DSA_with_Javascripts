
// <---Nearest Greater Element--->

// Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.

let arr=[39,27,11,4,24,32,32,7]

let n=arr.length;

let stk=[];
let bag="";

for(let i=0;i<n;i++)
{
    while(stk.length!=0 && stk[stk.length-1]>=arr[i])
    {
        stk.pop()
    }
    if(stk.length==0)
    {
        bag+=-1+" "
    }
    else if(stk[stk.length-1]<=arr[i])
    {
        bag+=stk[stk.length-1]+' '
    }

    stk.push(arr[i])
}

console.log(bag)