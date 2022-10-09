//parentNode & parentElement
let parent1 = document.querySelector('#items');
console.log(parent1.parentNode);
console.log(parent1.parentElement);  //parentNode & parentElement does the same thing.

//lastChild 
let child1 = document.querySelector('#list');
console.log(child1.lastChild);  //should return item4 but it's returning text bcz it takes white space or line break as text

//lastElementChild
console.log(child1.lastElementChild);  // now it is retirning item4

//firstChild
console.log(child1.firstChild);  // returns text

//firstElementChild
console.log(child1.firstElementChild);  // it should return item1

// sibling - element is h2 , it previous sibling is input , & its next sibling is unordered list
//nextSibling 
var sibling1 = document.querySelector('#items');
console.log(sibling1.nextSibling) ; //should return <ul></ul> but returning text 

//nextElementSibling
console.log(sibling1.nextElementSibling); //should return <ul></ul>

//previousSibling
console.log(sibling1.previousSibling); //will return text

//previousElementSibling
console.log(sibling1.previousElementSibling);  // should return <input>

//createElement
// we will create an ordered list under item1 i.e. item1(coffee) has 2 sub options(cold / hot)
let newItem1 = document.createElement('li');
newItem1.id = 'newItems1' ; 
let newItem1Name = document.createTextNode('Cold coffee');
newItem1.appendChild(newItem1Name);
console.log(newItem1);

let newItem2 = document.createElement('li');
newItem2.id = 'newItems2' ; 
let newItem2Name = document.createTextNode('hot coffee');
newItem2.appendChild(newItem2Name);
console.log(newItem2);

let newOL = document.createElement('ol')
newOL.id = "OrderList" ;
newOL.appendChild(newItem1);
newOL.appendChild(newItem2);
console.log(newOL)


let x = document.querySelector('#list');
let y = document.querySelector('#item2');
x.insertBefore(newOL,y)







