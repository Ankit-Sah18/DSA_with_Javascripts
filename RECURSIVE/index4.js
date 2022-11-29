// Given a string, S. Find the length of the string using recursion.

// Note: You are not allowed to use the length built-in property.

let str="poonamankit"

function Str(s)
{
    if(s=="")
    {
        return 0
    }

    let x= Str(s.substring(1))+1

    return x
}

console.log(Str(str))