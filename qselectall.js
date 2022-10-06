var secitem=document.querySelector('.list-group-item:nth-child(2)');
secitem.style.backgroundColor="lightgreen";
var secite=document.querySelector('.list-group-item:nth-child(3)');
secite.style.display="none";
var secitem1=document.querySelectorAll('.list-group-item');
secitem1[1].style.color="green";
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
