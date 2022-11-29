// You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

// we need to find thesuper digit ofthe integer p

// We definesuperdigit of an integer pusing the following rules:

// If p has only 1 digit, then itssuperdigit is 1.
// Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.

// Here n = 148 and k = 3 ,so p = 148148148.

// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3.

let str='123';

let k=3;

function SuperDigit(str)
{
    if(str.length==1)
    {
        return str
    }
    if(str.length==0)
    {
        return str
    }

    else 
    {
        let bag=0;
        for(let i=0;i<str.length;i++)
        {
           bag+=Number(str[i])
        }

        let new_bag= bag.toString()

        let x= SuperDigit(new_bag)

        return x
    }
}

let p= SuperDigit(str)
//  console.log(p)
 let result =p*k

 let z= SuperDigit(result.toString())

 console.log(z)