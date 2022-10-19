/*document.getElementById("clickme")
.addEventListener('click',function addbutton(){
    console.log("clicked")
});*/
//Add an event listener called DOMCONTENTLOADED , inside this add a call back function which consoles "DOM has loaded"

function DOMCONTENTLOADED(){
 document.getElementById("clickme")
 .addEventListener('click',function addbutton(){
    console.log("DOM has loaded")
});
}
DOMCONTENTLOADED();




var entry=document.getElementById('entry');
        entry.addEventListener('click',fun);
        var row=1;
        function fun() {
            var new={};
            new["amount"]=document.getElementById('amount').value;
            new["des"]=document.getElementById('des').value;
            new["cat"]=document.getElementById('cat').value;
            return new;
            var dis=document.getElementById("display");
            var newRow=dis.insertRow(row);
            var cell1=newRow.insertCell(0);
            var cell2=newRow.insertCell(1);
            var cell3=newRow.insertCell(2);
            cell1.innerHTML=amount;
            cell2.innerHTML=des;
            cell3.innerHTML=cat;
            row++;