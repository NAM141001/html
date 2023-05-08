var sp1 = document.getElementById('sp1');
var sp2 = document.getElementById('sp2');
var sp3 = document.getElementById('sp3');
var sp4 = document.getElementById('sp4');

function tong(){
    var tt1,tt2,tt3,tt4;
    if(sp1.value ==""){
        tt1 =0;
    }
    else{tt1 = sp1.value;}
    if(sp2.value ==""){
        tt2 =0;
    }
    else{tt2 = sp2.value;}
    if(sp3.value ==""){
        tt3 =0;
    }
    else{tt3 = sp3.value;}
    if(sp4.value ==""){
        tt4 =0;
    }
    else{tt4 = sp4.value;}
    return eval(tt1*2000)+eval(tt2*1500)+eval(tt3*1200)+eval(tt4*1000);
   
}
function thanhtien(){
    document.getElementById('thanhtien').innerHTML = tong()+"";
}