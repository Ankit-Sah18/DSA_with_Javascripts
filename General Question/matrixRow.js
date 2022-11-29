// Print Matrix Rows Ended
// Description

// You are given a matrix of size N x M. You have to print all the even indexed rows.

// Note: Indexing in the matrix starts from 0.

// Sample Input 1 

// 3 3
// 1 2 3 
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 
// 7 8 9 

let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
 
let n=3;
let m=3;

for(let i=0;i<n;i++)
{
    if(i%2==0)
    {
        let arr=mat[i]
        
        let str=arr.join(' ')
        console.log(str)
    }
}