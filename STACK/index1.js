// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

// I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose


// Input

let str="aaabccddd"

// let str="ankit"

let n= str.length;

let stk=[]

for(let i=0;i<n;i++)
{
   if(stk.length==0)
   {
    stk.push(str[i])
   }
   else if(stk[stk.length-1]==str[i])
   {
       stk.pop()
   }
   else {
       stk.push(str[i])
   }

}

// console.log(stk)
if(stk.length===0)
{
    console.log("Empty")
}
else
{
    let bag="";

for(let i=0;i<stk.length;i++)
{
    bag+=stk[i]
}
console.log(bag)

}