function clickedb1() {
    var a= parseInt (document.getElementById("a").value);
    var b= parseInt (document.getElementById("b").value); 
   a%b==0 ?
       alert(a+" "+"chia het cho"+" "+b) : 
       alert(a+" "+"khong chia het cho"+" "+b )
 }
 function clickedb2() {
     var tuoi  = document.getElementById("b2").value;
     tuoi>16 ?alert("Du dieu kien hoc lop 10") : 
     alert("Khong du dieu kien hoc lop 10")
 }
 function clickedb3() {
     var number = parseInt (document.getElementById("b3").value);
     number ==0 ? alert("So 0"):
     number >0 ? alert("So duong"):
     alert("So am");
 }
 function clickedb4() {
     var a = document.getElementById("b4_a").value;
     var b = document.getElementById("b4_b").value;
     var c = document.getElementById("b4_c").value;
     var max =parseInt(a);
     if(b>max) max = b;
     if(c>max) max = c;
     alert(max);
 }
 function clickedb5() {
    var a =parseInt(document.getElementById("b5_a").value);
    var b =parseInt(document.getElementById("b5_b").value);
    var c =parseInt(document.getElementById("b5_c").value);
    var Sum=parseFloat((a+b*2+c*2)/5);
    alert(Sum);
     Sum>8.5 ? alert("Tong diem:"+Sum+" "+ "Xep loai :A"): 
     (Sum<8 && Sum>7)? alert("Tong diem:"+Sum+" "+"Xep Loai B"):
     (Sum<7 && Sum>5)?  alert("Tong diem:"+Sum+""+"Xep loai C"):
     alert ("Tong diem:"+Sum+""+"Xep loai D");
 }
function clickedb6() {
    var a = parseInt(document.getElementById("b6_a").value);
    (a>0 && a<200) ? alert("Ban nhan duoc 3% hoa hong"):
    (a>200 && a<500)? alert("Ban nhan duoc 5% hoa hong"):
    alert ("Ban nhan duoc 10% hoa hong");
}
function clickedb7() {
    var a= document.getElementById("b7_a").value;
    var cuoc =a*60*3.300;
    alert("So tien phai tra la:"+" "+cuoc +"VND");
}