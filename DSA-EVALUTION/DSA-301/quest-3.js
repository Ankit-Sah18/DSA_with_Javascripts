// You are given a square matrix of size N x M.

// You have to print the spiral traversal of the matrix.

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 4 7 8 9 6 3 2 5 

let mat=[
    [2,4,5,6],
    [5,2,1,6],
    [7,9,0,3]
];

let n=3;
let m=4;

let top=0;
let botootm=n-1;
let left=0;
let right=m-1;
let bag='';

let count=0;

while(top<n*m && count<n*m)
{
    for(let i=top;i<=botootm && count<n*m;i++)
    {
        bag+=mat[i][left]+' '
        count++
    }
    left++
    for(let i=left;i<=right  && count<n*m;i++)
    {
        bag+=mat[botootm][i]+' ';
        count++;
    }
    botootm--
    for(let i=botootm;i>=top  && count<n*m;i--)
    {
        bag+=mat[i][right]+' ';
        count++
    }
    right--
    for(let i=right;i>=left  && count<n*m;i--)
    {
         bag+=mat[top][i]+' ';
         count++
    }
    top++
}

console.log(bag)