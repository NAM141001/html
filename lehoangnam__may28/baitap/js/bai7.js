var time;
var index=1;
  function changeimg (){
 var imgs =["img/dowload.jpg","img/images.jpg","img/img.jpg"];
document.getElementById('picture').src =imgs[index];
index++;
if(index==3){
    index=0;
}}
function play(){
time = setInterval(changeimg,2000);
}
function stop(){
    clearInterval(time);
}

