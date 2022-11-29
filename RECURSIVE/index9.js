
// Now that you have learnt about geometric progression in Masai School pre-course, we hope you remember about the sum of a geometric series:

// Assume, you are given

// S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)

// You will be given two integers n and r

// Your task is to calculate the sum S by writing a recursive function

let n=8;
let r= 5;

function GP(n,r)
{
    if(n==0)
    {
        return 1
    }

    let z= 1/(r**n)+GP(n-1,r)

    return z
}

let x=GP(n,r)

console.log(x.toFixed(4))

