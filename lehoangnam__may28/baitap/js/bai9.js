function update(){
    var a= document.getElementById('muavao');
    var b= document.getElementById('banra');
    var c= document.getElementById('update_muavao_vang');
    var d=document.getElementById('update_banra_vang');
    var e= document.getElementById('update_muavao_usd');
    var f= document.getElementById('update_banra_usd');
    if(document.getElementById('rbd_vang').checked){
        c.innerHTML = a.value;
        d.innerHTML =b.value;
    }
    else if(document.getElementById('rbd_usd').checked){
        e.innerHTML =a.value;
        f.innerHTML =b.value;
    }
}
function change_img(){
    var lop =document.getElementById('cb');
    if(lop.options[lop.selectedIndex].text == "Toyota"){
        var img = document.getElementById('img');
        img.src= "img/images.jpg";
        }
    else if(lop.options[lop.selectedIndex].text == "KiA"){
        var img = document.getElementById('img');
        img.src= "img/img.jpg";
    }
    else if(lop.options[lop.selectedIndex].text == "Ford"){
        var img = document.getElementById('img');
        img.src= "img/download.jpg";
    }
}
function load_form(){
      document.getElementById('btn_update').disabled = true;
      document.getElementById('btn_state').disabled = true;
}
function unlock(){
    console.log('a');
    if(document.getElementById('muavao').value != ""){
    document.getElementById('btn_update').disabled = false;
    document.getElementById('btn_state').disabled = false;
}
}