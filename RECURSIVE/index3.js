// This is an easy question. You just have to find the sum of an array given the elements of the array.

// The only constraint is that you have to write a recursive code

let arr=[2,2,3,4]

let n=arr.length;

// function Sum(a,n)
// {
//     if(n<=0)
//     {
//         return 0
//     }

//     let x= (Sum(a,n-1)+a[n-1])

//     return x
// }

// let z= Sum(arr,n)

// console.log(z)

// Product of Array

// let arr=[2,2,3,4]

// let n=arr.length;

// function Sum(a,n)
// {
//     if(n<=0)
//     {
//         return 1
//     }

//     let x= (Sum(a,n-1)*a[n-1])

//     return x
// }

// let z= Sum(arr,n)

// console.log(z)

// print all element of array

function array(a,n)
{
    if(n<=0)
    {
        return 0

        // console.log(0)
    }

    let x= (array(a,n-1),a[n-1])
    let bag=""

     let p=  bag+=x+' '

    console.log(p)
}

array(arr,n)