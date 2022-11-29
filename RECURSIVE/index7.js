// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20.
//  These hacks can be used any number of times.Can Nick help Tom with his hacks?

let n=2;

let c=1;

function Hack(c,n)
{
    if(c==n)
    {
        return true
    }
    if(c>n)
    {
        return false
    }

    let x= Hack(c*10,n)||Hack(c*20,n)

    return x
}

let z=Hack(c,n)

// console.log(z)

if(z==true)
{
    console.log("Yes")
}
else
{
    console.log("No")
}