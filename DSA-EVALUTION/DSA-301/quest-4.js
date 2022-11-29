// Question:-
// War of Minions Ended
// Description

// Minions are of 26 types, from 'a' to 'z'. If two Minions of same type finds themselves besides each other, they will kill each other.

// You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. i.e Further No Minion will kill other Minion.

// If no Minion survived a after all the fighting, print "-1".

// Sample Input 1 

// 5
// aabbc
// Sample Output 1

// c
// Sample Input 2 

// 12
// abbabaadcbbc
// Sample Output 2

// bd
// Sample Input 3 

// 2
// aa
// Sample Output 3

// -1

let str="aapoonamankit"

let n=str.length;

let stk=[];
let bag=[];

for(let i=0;i<n;i++)
{
    if(stk.length==0)
    {
        stk.push(str[i])
    }

    else 
    {
        if(stk[stk.length-1]===str[i])
        {
            stk.pop()
        }

        else{
            stk.push(str[i])

            bag.push(stk[stk.length-1])
        }
    }

    // console.log(stk)

    
}

if(stk.length!=0)
    {
        console.log(stk.join(''))
    }
    else
    {
        console.log(-1)
    }