class dll {
  constructor () {
    this.head = new node(null);
  }
  
  append(value) {
    var header = this.head;
    
    if(header.next == null) {
      var n = new node(value);
      header.next = n; 
    }
    else {
      while(header.next != null)
        header = header.next;
      
      var n = new node(value) ;
      n.previous = header;
      header.next = n;
    }
  }
  
  prepend(value) {
    
    var header = this.head;
    var n = new node(value);
    header.next.previous = n;
    n.next = header.next;
    header.next = n;
    
  }
  
  display()
  {
    var header = this.head;
    while(header.next != null){
      header = header.next;
      console.log(header.value);
      
    }
  } 
  
  insert(index, value) {
    
    var header = this.head;
    let counter = 0;
    while(header.next != null){
      header = header.next
      
      if(counter == index)
        {
          console.log("working");
          var n = new node(value);
          n.next = header.previous;
          n.previous = header.previous.next;
          header.previous = n.next;
        }
      counter++;
    }
    
  }
  
  getIndex(value)
  {
    var header = this.head;
    let counter = 0;
    
    while(header.next != null) {
      
      header = header.next;
      
      if(header.value == value)
        break;
      
      counter++;
      
    }
    
    return counter;
  }
  
  change(oldValue, newValue){
    var header = this.head;
    
    while(header.next != null) {
      header = header.next;
      
      if(header.value == oldValue)
        header.value = newValue;
    }
  }
  
  delete(value) {
    var header = this.head;
    
    while(header.next != null) {
      header = header.next;
      
      if(header.value == value){
        header.previous.next = header.next;
        header.next.previous = header.previous;
      }
    }
  }
  
  join(other) {
    
    var oldHeader = this.head;
    var newHeader = other.head;
    
    while(oldHeader.next != null)
      oldHeader = oldHeader.next;
    
    oldHeader.next  = newHeader.next;
    newHeader.next.previous = oldHeader;
 
    
  }
}

class node {
  constructor(value) {
    this.value = value;
    this.next = this.previous = null;
  }
}

var test = new dll();


test.append(10);
test.append(20);

test.append(75);

test.append(100);

test.prepend(45);

//test.insert(1, 65);

test.change(10, 55);

test.delete(75);

test.display();


console.log("index : "+test.getIndex(20));


var test2 = new dll();

test2.append(42);

test2.prepend(33);

test2.display();

test.join(test2);

test.display();


