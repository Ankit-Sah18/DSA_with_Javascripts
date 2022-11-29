// Now that you have learnt about geometric progression in Masai School pre-course,
//  we hope you remember about the sum of a geometric series:

// Assume, you are given

// S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)

// You will be given two integers n and r

// Your task is to calculate the sum S by writing a recursive function

// let n=3;
// let r=5;

// function Gp(n,r)
// {
//     if(n==0)
//     {
//         return 1
//     }

//     let x= 1/(r**n)+Gp(n-1,r)

//     return x
// }

// let z=Gp(n,r)
// console.log(z)


// Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).

// You have to print the result up to 4 digits after the decimal point.

let n=3;
function fect(n)
{
    if(n==1)
    {
        return 0
    }

    let x= fect(n-1)+Math.log(n)

    return x
}

let z=fect(n)
console.log(z.toFixed(4))