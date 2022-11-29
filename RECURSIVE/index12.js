// Question -EtopowerX

let bag='';

let a=0;
let b=0;

function fact(f)
{
    if(f==0||f==1)
    {
        return 1
    }

    return  f*fact(f-1)
}

let x=4;
let n=2;

const EtoPower=(x,n,a,b)=>{

     if(a>n)
     {
        return bag.toFixed(4)
        // return bag
     }

      bag=bag+((x**b)/fact(a))

      return EtoPower(x,n,a+1,b+1)
}

let z=EtoPower(x,n,a,b)

console.log(z.toFixed(4))