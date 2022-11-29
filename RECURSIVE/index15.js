// Implement the GCD Function using recursion. Given two integers a and b, find the greatest common divisor of a and b.

// The approach which uses logarithmic time complexity is expected here.

let a=2;
let b=25;

const GCD=(a,b) =>{
     
      let x= b%a

      if(x==0)
      {
          return a
      }

      let z = GCD(x,a)
      return z
}

let x= GCD(a,b)

console.log(x)