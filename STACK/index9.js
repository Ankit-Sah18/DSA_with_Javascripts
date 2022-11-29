// question:-

// Can you find the sum Ended
// Description

// Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :

// The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
// If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1.

// Sample Input 1 

// 5
// 5 4 1 3 2
// Sample Output 1

// -2 0 6 1 3 
// Hint

// Sample 1 Explanation

// Values of x for each i: -1,1,2,2,4

// Values of y for each i: -1,-1,4,-1,-1

// So, x+y for each i: -2,0,6,1,3

let arr=[5,4,1,3,2]

let n= arr.length;

let stk=[];
let bag=[];
for(let i=0;i<n;i++)
{
    while(stk.length>0 && arr[stk[stk.length-1]]<=arr[i])
    {
        stk.pop()
    }

    if(stk.length==0)
    {
        bag.push(-1)
    }
    else
    {
        bag.push(stk[stk.length-1]+1)
    }

    stk.push(i)
}

// console.log(bag)

let stk1=[];
let bag1=[];

for(let i=n-1;i>=0;i--)
{
    while(stk.length>0 && arr[stk1[stk1.length-1]]<=arr[i])
    {
        stk1.pop()
    }

    if(stk1.length==0)
    {
        bag1.push(-1)
    }

    else
    {
        bag1.push(stk1[stk1.length-1]+1)
    }

    stk1.push(i)
}

let ans= bag1.reverse()

// console.log(ans);

let sum='';

for(let i=0;i<n;i++)
{
   sum+=ans[i]+bag[i]+' '
}

console.log(sum)