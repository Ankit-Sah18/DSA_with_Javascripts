// You are given an array ofNunsorted numbers. Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.

// USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.

let arr=[2,5,1,7,4,8]

let n=arr.length;

function BUbble(n,arr)
{
    if(n===1)
    {
        return arr
    }

    for(let i=0;i<n-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
        }

    }
    let x= BUbble(n-1,arr)

    return x

}

let z=BUbble(n,arr)

console.log(z.join(' '))

// <----Important---->