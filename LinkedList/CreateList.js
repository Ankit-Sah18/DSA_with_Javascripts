
  class Node{
    constructor(el)
    {
        this.el=el;
        this.next=null

    }
  }

  class LinkedList{

      constructor(){
        this.head=null;
        this.size=0;
      }
  
    // add method
  AddNode(data) {

    let NewNode= new Node(data)

    if(this.head==null)
    {
        this.head=NewNode;
    }

   else{
    let cur=this.head;

    while(cur.next)
    {
        cur=cur.next;

    }
    cur.next=NewNode;
   }
    this.size++
  }

   PrintData()
   {
      let cur=this.head;
      let i=0;
      while(cur)
      {
        console.log(cur.el, i++ )

        cur=cur.next;
      }
   }

}
let list= new LinkedList()
list.AddNode(1)  
list.AddNode(2)
list.AddNode(3)
list.AddNode(4)
list.AddNode(5)

list.PrintData()
console.log(list)



