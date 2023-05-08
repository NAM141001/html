var ten =document.getElementById('tensv');
var lop = document.getElementById('lop');
var mon = document.getElementById('mon');
var rbd_lt =document.getElementById('a');
var rbd_tt =document.getElementById('b');
var sv =[];
function add(){
var item_tensv = ten.value;
var item_lopsv = lop.options[lop.selectedIndex].text;
var item_monsv = mon.options[lop.selectedIndex].text;
var item_loai;
if(rbd_lt.checked){
    item_loai="lý thuyết";
}
else if(rbd_tt.checked){
    item_loai="thực hành";
}
var sinhvien = {
    tensv : item_tensv,
    lopsv : item_lopsv,
    monsv : item_monsv ,
    loai :  item_loai
}
       sv.push(sinhvien);  
       render();                    
}

function render(){
    table = '<tr> '+ 
       '<td> Họ tên </td> '+ 
       '<td> Lớp </td> '+ 
       '<td> Môn </td> '+ 
       '<td> Loại đăng kí </td> '+ 
    '</tr>'

    for(i=0;i<sv.length;i++){
        table += `<tr> 
       <td> ${sv[i].tensv} </td> 
       <td> ${sv[i].lopsv} </td> 
       <td> ${sv[i].monsv}  </td>  
       <td> ${sv[i].loai}   </td>  
    </tr>`
    }
    console.log(table);
    document.getElementById('render').innerHTML=table;


}