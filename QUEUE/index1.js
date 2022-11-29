// You are the operations manager of Masai School, and N number of processes have to be executed by you.
// All the processes have a unique number assigned to them from1 to N.

// You are given two arrays :

// The first array denotes the calling order, in which the processes are being started.
// The second array denotes theidealorder in which all the processes should have been executed.

// Print a single integer, denoting the value, as mentioned in the question.

let arr1=[3,2,1]

let arr2=[1,3,2]

let count=0;

while(arr1.length>0)
{
    if(arr1[0]==arr2[0])
    {
        arr1.shift()
        arr2.shift()

        count++
    }
    else{
        arr1.push(arr1.shift())

        count++
    }

    
}
console.log(count)