m= prompt("Nhập số phần tử text");
n=prompt("Nhập số nhóm radio");
p=prompt("Nhập số lượng option");
for(i=1;i<=m;i++){
    document.write("<input type= char(6) text char(6)>");
}
document.write("<br>");
a=1;
for(j=1;j<=n;j++){
    document.write(" <input type=  'radio' name='c"+a+"' >" + a);
    a++;
    document.write(" <input type=  'radio' name='c"+(a-1)+"' >" + a);
    a++;
    document.write("<br>")
}
document.write("<select> ")
for(k=1;k<=p;k++){
    document.write(" <option> item" +k+ "</option>  ")
}
document.write("</select>");
