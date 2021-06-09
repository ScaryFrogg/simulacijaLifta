export default class Queue{
    constructor(capacity){
        this.capacity = capacity
        this.items=[]
    }
    offer(obj){
        if(obj===null || obj===undefined) return false
        if(this.items.length<this.capacity){
            this.items.push(obj)
            return true
        }
        return false
    }
    poll(){
        if(this.isEmpty()) return null
        return this.items.shift()
    }
    front(){
         if(this.isEmpty()) return null
         return this.items[0];
    }
    isEmpty(){
     return this.items.length==0
    }
    extract(obj){
        while(this.items.indexOf(obj) !=-1){
         this.items.splice(this.items.indexOf(obj),1)
        }
    }
    isNotFull(){
         return this.capacity!=this.items.length
    }
 
 }