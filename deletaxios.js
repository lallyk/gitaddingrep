var selec=null;
function onform()
        {
            var new1=readform();
            if(selec == null)
              insertnew(new1);
            else
               uprecord(new1);
            resetform();
            document.getElementById("entry2")
            .addEventListener('click',function addbutton(){
                axios.delete("https://crudcrud.com/api/4784ca23303c4afa93cba631231a7fe7/appointmentcrud")
                .then((response) => {
                 console.log(response)
                 })
                 .catch((err) => {
                   console.log(err)
                 })
           });

        }

        function readform(){
            var new1={};
            new1["amount"]=document.getElementById("amount").value;
            new1["des"]=document.getElementById("des").value;
            new1["cat"]=document.getElementById("cat").value;
            return new1;
        }
        function insertnew(d) {
            var table=document.getElementById("display").getElementsByTagName('tbody')[0];
            var newRow=table.insertRow(table.length);
            cell1=newRow.insertCell(0);
            cell1.innerHTML=d.amount;
            cell2=newRow.insertCell(1);
            cell2.innerHTML=d.des;
            cell3=newRow.insertCell(2);
            cell3.innerHTML=d.cat;
            var cell4=newRow.insertCell(3);
            cell4.innerHTML=`<a onClick="onedit(this)" color:"blue>Edit</a>
                             <a onClick="ondelete(this)">Delete</a>`;
             axios.post("https://crudcrud.com/api/4784ca23303c4afa93cba631231a7fe7/appointmentcrud",d)
            .then((response) => {
             console.log(response)
             })
             .catch((err) => {
               console.log(err)
            })
        }
        function resetform(){
            document.getElementById("amount").value="";
            document.getElementById("des").value="";
            document.getElementById("cat").value="";
            selec=null;

        }
        function onedit(t){
            selec=td.parentElement.parentElement;
            document.getElementById("amount").value=selec.cells[0].innerHTML;
            document.getElementById("des").value=selec.cells[1].innerHTML;
            document.getElementById("cat").value=selec.cells[1].innerHTML;

        }
        function uprecord(new1){
            selec.cells[0].innerHTML=new1.amount;
            selec.cells[1].innerHTML=new1.des;
            selec.cells[2].innerHTML=new1.cat;

        }
        function ondelete(){
         /*if(confirm('are you sure?')){
            row=td.parentElement.parentElement;
            document.getElementById("display").deleteRow(row.rowIndex);
            resetform();
         }*/
         axios
              .delete('https://crudcrud.com/api/4784ca23303c4afa93cba631231a7fe7/appointmentcrud/6352cf4c75250203e82f1ba3')
              .then((response) => {
                console.log(response)
                })
                .catch((err) => {
                  console.log(err)
                })
        }
        document.getElementById('entry2').addEventListener('click', ondelete);
        function DOMCONTENTLOADED(){
           document.getElementById("entry1")
            .addEventListener('click',function addbutton(){
                axios.get("https://crudcrud.com/api/4784ca23303c4afa93cba631231a7fe7/appointmentcrud")
                .then((response) => {
                 console.log(response)
                 })
                 .catch((err) => {
                   console.log(err)
                 })
            });
        }
           DOMCONTENTLOADED();
           
