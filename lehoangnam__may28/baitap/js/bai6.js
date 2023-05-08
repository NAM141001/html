var user = document.getElementById("user");
var pass = document.getElementById("pass");
var user1 = document.getElementById("user1");
var pass1 = document.getElementById("pass1");
 var a = document.getElementById("a");
 var b = document.getElementById("b");
 var btn = document.getElementById("btn");
function load_form(){
    btn.disabled = true;
    user.focus();
}
function unlock(){
    btn.disabled = false;
}
 function getdata(){
    if(user.value=="" || pass.value =="" ){
        alert('Không được để trống');
        user.focus();
    }
    else {
        var psw = pass.value;
        if(psw.length<6){
            alert("Không đc nhập pass nhỏ hơn 6 kí tự");
            user.focus();
        }
        else {
            user1.innerHTML =user.value ;
            pass1.innerHTML =pass.value ;
            b.style.display = "block";
            a.style.display = "none";
        }
    }
}