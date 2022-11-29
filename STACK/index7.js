// question: - Given an array of N integers, Find the next greater element for each element in the array and 
// if the next greater element does not exist take it as -1, You need,
// to output the sum of numbers for which the next greater elements are odd and positive.

// Sample Input 1 

// 1
// 5
// 2 3 5 8 3
// Sample Output 1

// 5

let arr=[2,3,5,8,3,9,6,7]
let n= arr.length;

let stk=[];

let ans=[];

for(let i=n-1;i>=0;i--)
{
    while(stk.length>0 && stk[stk.length-1]<=arr[i])
    {
        stk.pop()
    }

    if(stk.length==0)
    {
        ans.push(-1)
    }

    else if(stk[stk.length-1]>arr[i])
    {
        ans.push(stk[stk.length-1])
    }

    stk.push(arr[i])
}

let z= ans.reverse()

console.log(z)

let sum=0;

for(let i=0;i<z.length;i++)
{
    if(z[i]%2==1)
    {
        sum+=arr[i]
    }
}

console.log(sum)


