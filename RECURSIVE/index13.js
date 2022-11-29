// You are very good at playing chess since childhood and you knew the rules very much.
//  You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.
//  It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// input=3,3,1

var i=3;
var j=3;

var n=2;

var mat=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
    // [0,0,0,0,0,0,0,0,0,0]
]

const MoveKnight=(i,j,n,mat)=>{
    
       if(i<1 || j<1 || i>10 ||j>10)
       {
           return 
       }

       if(n==0 && mat[i][j]==1 )
       {
           return 
       }

       if(n==0)
       {
           mat[i][j]=1;
           return 
       }

       else{

           MoveKnight(i-2,j+1,n-1,mat)
           MoveKnight(i-2,j-1,n-1,mat)
           MoveKnight(i+2,j-1,n-1,mat)
           MoveKnight(i+2,j+1,n-1,mat)
           MoveKnight(i-1,j+2,n-1,mat)
           MoveKnight(i+1,j+2,n-1,mat)
           MoveKnight(i-1,j-2,n-1,mat)
           MoveKnight(i+1,j-2,n-1,mat)

           return mat
       }

      
}

let z=MoveKnight(i,j,n,mat)

// console.log(mat)

let count=0;

for(let m=0;m<10;m++)
{
   for(k=0;k<10;k++)
   {
       if(z[m][k]==1)
       {
          count++
       }
   }
}

console.log(count)




