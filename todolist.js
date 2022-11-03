fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then((output) => {
        let text = "<table border='1'>"
        for (let x in output) {
            
            text += "<tr><td><label for='"+output[x].id+"'>"+ output[x].title+"</label></td><td><input type='checkbox' onchange='return checkout()' name='todo' value='1'class='checkboxes' id='"+output[x].id+"'></td></tr>";
        }
          text += "</table>"    
          document.getElementById("demo").innerHTML = text;
  }).catch(err => console.error(err));       


function checkout()
         {
            var count=0;
            var chks = document.getElementsByClassName( 'checkboxes' );
            for(let i=0;i<chks.length;i++){
                if(chks[i].checked){
            count++;}
                }
            if (count>0 && count%5==0){
                alert('Congrats!! You have completed 5 tasks!!');
                return false;
            }
         }
checkout();
