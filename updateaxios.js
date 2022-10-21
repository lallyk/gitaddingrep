function onedit(){
            axios
            .put('https://crudcrud.com/api/4784ca23303c4afa93cba631231a7fe7/appointmentcrud/6352dd0775250203e82f1bbb', {
             amount: 1000,
             des:'saree'
        })
        .then((response) => {
            console.log(response)
            })
            .catch((err) => {
              console.log(err)
            })
    
    }
   document.getElementById('entry3').addEventListener('click', onedit);
