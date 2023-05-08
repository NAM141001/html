a= prompt("Nhập số dòng");
b= prompt("Nhập số cột");
document.write("<table border=1 >");
for(i=1;i<=a;i++){
    document.write("<tr>");
    for(j=1;j<=b;j++){
    document.write ("<td>" +i +j + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");7