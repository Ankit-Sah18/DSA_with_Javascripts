
// <--Product Of Array-->

// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.

let arr=[1,2,3,4,5]
let n=arr.length;
let left=[]
left[0]=1;
let prod=1;

for(let i=1;i<=n;i++)
{
    prod=prod*arr[i-1]

    left[i]=prod
}

// console.log(left)

let right=[]
right[n-1]=1;
let prodr=1;
for(let i=n-2;i>=0;i--)
{
    prodr=prodr*arr[i+1]

    right[i]=prodr
}

// console.log(right)

let bag="";

for(let i=0;i<n;i++)
{
    bag+=left[i]*right[i]+" "
}

console.log(bag)