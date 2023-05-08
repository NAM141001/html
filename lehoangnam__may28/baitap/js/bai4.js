var user = document.getElementById("user");
var pass = document.getElementById("pass");
var user1 = document.getElementById("user1");
var pass1 = document.getElementById("pass1");
 var a = document.getElementById("a");
 var b = document.getElementById("b");
function getdata(){
    user1.innerHTML =user.value ;
    pass1.innerHTML =pass.value ;
    b.style.display = "block";
    a.style.display = "none";
}