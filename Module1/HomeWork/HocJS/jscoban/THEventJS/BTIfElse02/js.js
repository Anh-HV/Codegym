function clickedb1() {
    var a = parseFloat(document.getElementById("b1_a").value);
    var b = a*9/5 +32;
    alert(a+"C="+b+"F");
}
function clickedb2() {
    var a = parseFloat(document.getElementById("b2_a").value);
    var b = a*3.2808;
    alert(a+"m="+b+"ft");
}
function clickedb3() {
    var a = parseFloat(document.getElementById("b3_a").value);
    var b = parseFloat(document.getElementById("b3_b").value);
    var s=parseFloat( a*b);
    alert("Dien tich HCN la:" +s);
}
function clickedb4() {
    var a = parseFloat(document.getElementById("b4_a").value);
    var b = parseFloat(document.getElementById("b4_b").value);
    var s=parseFloat( a*b/2);
    alert("Dien tich tam giac vuong la:"+" " +s);
}
function clickedb5() {
    var a = parseFloat(document.getElementById("b5_a").value);
    var b = a*a;
    alert("Dien tich hinh vuong la:" +b);
}
function clickedb6() {
    var a = parseFloat(document.getElementById("b6_a").value);
    var b = parseFloat(document.getElementById("b6_b").value);
    alert("X="+(b/a));
}
function clickedb7() {
    var a = parseFloat(document.getElementById("b7_a").value);
    var b = parseFloat(document.getElementById("b7_b").value);
    var c = parseFloat(document.getElementById("b7_c").value);
    if(a==0) {
        if(b==0) {
            alert("Khong chia het cho so 0")
        } 
        else alert("X="+(-c/b));     
    }
    else{
        var delta = parseFloat((b*b)-(4*c*a));
        if(delta<0) alert("Phuong trinh vo nghiem");
        else if(delta==0){
        alert("Phuong trinh co nghiem kep x="+" "+(-b/2*a));
        }
        else if(delta>0){
            var x1= (-b+ Math.sqrt(delta))/2*a;
            var x2= (-b- Math.sqrt(delta))/2*a;
            alert("Phuong trinh co nghiem X1="+x1+",X2="+x2);
        }
    }
}
function clickedb8() {
    var a=document.getElementById("b8_a").value;
    (a>0 &&a<120) ? alert("La tuoi cua nguoi binh thuong") : alert("Quai vat");
}
function clickedb9() {
    var a = parseFloat(document.getElementById("b9_a").value);
    var b = parseFloat(document.getElementById("b9_b").value);
    var c = parseFloat(document.getElementById("b9_c").value);
    (a+b+c>0 && a+b>c && b+c>a && a+c>b)? alert("La 3 canh cua tam giac"):
    alert("3 canh da cho khong tao thanh tam giac")
}
function clickedb10() {
    var a =parseFloat(document.getElementById("b10_a").value);
    // if(a<100) alert("So tien phai tra la"+a*1000+"VND");
    // else if(a<150 && a>100) alert("So tien phai tra la"+a*2000+"VND");
    // else if(a<200 && a>150) alert("So tien phai tra la"+a*2500+"VND");
    // else alert("So tien phai tra la"+a*3000+"VND");
    a<100 ? alert("So tien phai tra la"+a*1000+"VND"):
    (a<150 && a>100)? alert("So tien phai tra la"+a*2000+"VND"):
    (a<200 && a>150)? alert("So tien phai tra la"+a*2500+"VND"):
    alert("So tien phai tra la"+a*3000+"VND");
}
function clickedb11() {
    var a = parseFloat(document.getElementById("b11_a").value);
    if(a<5)    alert("Thue phai tra la"+(a*5/100))
    else if(a>5 && a<10) alert("Thue phai tra la"+(0.25+a*10/100))
    else if(a>10 && a<18) alert("Thue phai tra la"+(0.75+a*15/100))
    else if(a>18 && a<32) alert("Thue phai tra la"+(1.95+a*20/100))
    else if(a>32 && a<52) alert("Thue phai tra la"+(4.75+a*25/100))
    else if(a>52 && a<80) alert("Thue phai tra la"+(9.75+a*30/100))
    else alert("Thue phai tra la"+(18.15+a*35/100))
}
function clickedb12() {
    var a = parseFloat(document.getElementById("b12_a").value);
    var b = parseFloat(document.getElementById("b12_b").value);
    var c = parseFloat(document.getElementById("b12_c").value);
    if(a>0 &&  b>0 && c>0){
         var sum=  Math.pow(a*(1+c/100),b);
         alert(sum);
    }
    else
    alert("So tien khong co gia tri am");
}