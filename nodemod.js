var item=document.querySelector('#items');
item.parentElement.style.backgroundColor="lightgreen";
item.children[2].style.backgroundColor="green";
console.log(item.firstChild);//it will give  text node
item.firstElementChild.textContent='lalitha';
console.log(item.lastChild);//it will give  text node
item.lastElementChild.textContent='kumari';
console.log(item.nextSibling);//it will give text node
console.log(item.nextElementSibling);
item.nextElementSibling.textContent='next sibling';
console.log(item.previousSibling);//it will give text node
item.previousElementSibling.style.color='red';
var ndiv=document.createElement('div');
ndiv.className='hello';
ndiv.id='hello';
ndiv.setAttribute('title','hello div');
var ndivtxt=document.createTextNode("HeLLO World");
ndiv.appendChild(ndivtxt);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(ndiv,h1);
var ndiv1=document.createElement('div');
ndiv1.className='hello1';
ndiv1.id='hello1';
ndiv1.setAttribute('title','hello div1');
var ndivtxt1=document.createTextNode("HeLLO World");
ndiv1.appendChild(ndivtxt1);
var container1=document.getElementById("items");
var li=document.getElementById("item1");
container1.insertBefore(ndiv1,li);

