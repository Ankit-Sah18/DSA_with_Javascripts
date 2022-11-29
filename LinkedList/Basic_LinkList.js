

// const n1={
//     data:100
// };
// const n2={
//     data:200
// };

// n1.next=n2;
// console.log(n1)

class Node{

    constructor(data,next=null )
    {
        this.data=data;
        this.next=next;
    }
}

class Linkedlist{

    constructor(){
        this.head=null;
        this.size=0;
    }
    // add data
    insertFrist(data){
        this.head=new Node(data, this.head)
    }

    insertLastNode(data)
    {
        let node=new Node(data)
        let curr;

        if(!this.head)
        {
            this.head=node
        }
        else
        {
            curr=this.head;

            while(curr.next)
            {
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
    }

    PrintAllData()
    {
       let cur=this.head;

       while(cur)
       {
        console.log(cur.data)
        cur=cur.next
       }
      
    }

    PrintReverse()
    {
        let cur=head;
        let temp=null;
        let fut=null;

        while(cur!=null)
        {
            fut=cur.next;
            cur.next=temp;
            temp=cur;
            cur=fut;

          
        }
        head=temp;
        return head;

      
    }
    
}

const ll=new Linkedlist();

ll.insertFrist(100)
ll.insertFrist(200)
ll.insertFrist(300)
ll.insertFrist(400)
ll.insertFrist(500)
ll.insertLastNode(600)


// console.log(ll)
// console.log(ll)
ll.PrintAllData()

let n=ll.PrintReverse()
console.log(n)
