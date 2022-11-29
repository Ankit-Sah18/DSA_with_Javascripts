// Next Greater Sum 
// Description

// Given an array of N integers, Find the next greater element for each element in the array and if the next greater element does not exist take it as -1,
// You need to output the sum of numbers for which the next greater elements exists.

// Note: You need to output the sum of elements for which the next greater element exists, if for any element next greater element does not exist  (i.e. -1)
// then don't add the elements value in final sum.

// Sample Input 1 

// 1
// 5
// 2 3 5 8 3
// Sample Output 1

// 10
// Sample Input 2 

// 1
// 6
// 6 10 4 8 3 7
// Sample Output 2

// 13

// let arr=[6,10,4,8,3,7]

let arr=[2,3,5,8,3]

let n=arr.length;

let sum=0;

let stk=[];
let bag=[];

for(let i=n-1;i>=0;i--)
{
    while(stk.length>0 && stk[stk.length-1]<=arr[i])
    {
        stk.pop()
    }

    // if(stk.length==0)
    // {
    //     bag.push(-1)
    // }

    if(stk[stk.length-1]>arr[i])
    {
        // bag.push(stk[stk.length-1])
        sum+=arr[i]
    }

    stk.push(arr[i])
}

// let z=bag.reverse()

// console.log(z)

console.log(sum)