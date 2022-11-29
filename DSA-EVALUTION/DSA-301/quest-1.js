// Binary Matrix Ended
// Description

// You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's.
//  You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

//  Sample Input 1 

// 3 2
// 1 0
// 0 1
// 1 1
// Sample Output 1

// 0 1 
// 1 0 
// 0 0 

let mat=[
    [0,1,0,1],
    [0,0,1,1],
    [1,0,0,0]

]

let n=3;
let m=4;

// let bag='';

for(let i=0;i<n;i++)
{
    let bag=''

    for(let j=0;j<m;j++)
    {
        if(mat[i][j]==0)
        {
            mat[i][j]=1;
        }

        else if(mat[i][j]==1)
        {
            mat[i][j]=0;
        }

        bag+=mat[i][j]+' '
    }

    console.log(bag)
}