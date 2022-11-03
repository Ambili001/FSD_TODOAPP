
var form=document.getElementById("form");
    var user = document.getElementById("user");
    var pwd = document.getElementById("pwd");


form.addEventListener('submit',function(event){
    
    if(user.value=="admin" && pwd.value=="12345")
{
    return true;
}
else{
    
    alert("Invalid Username or Password");
    event.preventDefault();
    return false;
}
});

