// question ;
// Signal's Capacity Ended
// Description

// There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is less than or equal to the height of the given tower) + 1}.

// You need to write a program that finds the power of each tower.


// Sample Input 1 

// 2
// 7
// 100 80 60 70 60 75 85
// 5
// 3 5 0 9 8
// Sample Output 1

// 1 1 1 2 1 4 6
// 1 2 1 4 1

let arr=[100,80,60,70,60,75,85]
let stk=[];

let bag=[];


for(let i=0;i<arr.length;i++)
{
    let count=1;

    while(stk.length>0 && arr[i]>= arr[stk[stk.length-1]])
    {
        count+=bag[stk[stk.length-1]]

        stk.pop()
    }

    // console.log(arr[stk[stk.length-1]])

    stk.push(i)

    bag[i]=count;
}

console.log(bag.join(' '))