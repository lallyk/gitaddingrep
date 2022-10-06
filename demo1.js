//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//document.title='firstdemo';
//console.log(document.all);
//document.all[0].textcontent='Items';
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor='green';
document.getElementById("items").style.fontWeight = "bold";
var it=document.querySelector('li');
it.style.backgroundColor='blue';
var it1=document.querySelector('new');
it1.value='hello';

