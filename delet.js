var form=document.getElementById("addform");
var iteml=document.getElementById("items");
form.addEventListener('submit',addItem);
iteml.addEventListener('click',removeItem);
iteml.addEventListener('click',addItem);
function addItem(e)
{
    e.preventDefault();
    var newItem=document.getElementById('item');
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var delbtn=document.createElement('button');
<<<<<<< HEAD
    iteml.appendChild(li);
=======
    //iteml.appendChild(li);
>>>>>>> b651ef3eac249e51185f0841657c1731d4386abf
    delbtn.className='btn';
    delbtn.appendChild(document.createTextNode('del'));
    li.appendChild(delbtn);
    iteml.appendChild(li);
    li.appendChild(document.createTextNode(newItem));
    var delbtn1=document.createElement('button');
<<<<<<< HEAD
    iteml.appendChild(li);
=======
    //iteml.appendChild(li);
>>>>>>> b651ef3eac249e51185f0841657c1731d4386abf
    delbtn1.className='btn1';
    delbtn1.appendChild(document.createTextNode('edit'));
    li.appendChild(delbtn1);
    iteml.appendChild(li);
}
function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li=e.target.parentElement;
            iteml.removeChild(li);
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> b651ef3eac249e51185f0841657c1731d4386abf
