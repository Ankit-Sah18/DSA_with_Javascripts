// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time.
//  You have to count, how many possible ways Sandhya can run up to the stairs.

let n=4;

function jump(n)
{
    if(n==0)
    {
        return 1
    }
    if(n<0)
    {
        return 0
    }

    let x=jump(n-1)+jump(n-2)+jump(n-3)
    return x
}

let z=jump(n)

console.log(z)