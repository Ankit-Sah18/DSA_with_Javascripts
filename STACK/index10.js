// question:-

// Again a classical problem 
// Description

// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced.
//  The pair of square brackets enclose a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.

// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

// Output
// Print "balanced" if the string is balanced, otherwise print "not balanced" in case the string is not balanced


// Sample Input 1 

// 3
// {([])}
// ()
// ([]
// Sample Output 1

// balanced
// balanced
// not balanced

let str="()[]"

let n=str.length;

function pairs(x)
{
    if(x==')') return '(';

    if(x==']') return '[';

    if(x=='}') return '{';
}

function CheckStr(str)
{
    let stk=[];

    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='(' || str[i]=='[' || str[i]=='{')
        {
            stk.push(str[i])
        }

        else{

            let pair=pairs(str[i])
            if(pair!=stk[stk.length-1])
            {
                return false
            }

            else{
                 
                stk.pop()
            }
        }
    }

    if(stk.length==0)
    {
        // return balanced;
        return true
    }
    else{

        // return (not+" "+balanced)
        return false
    }
}

let x= CheckStr(str)

// console.log(x)

if(x==true)
{
    console.log("balanced")
}
else{

    console.log("not balanced")
}

