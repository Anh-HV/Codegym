function clickedb1() {
    function fibonacci(num){
        if(num<=1) return 1
        else return fibonacci(num-1) + fibonacci(num-2);
    }
    let display ='';
    for(i=0;i<=20;i++){
        display += fibonacci(i)+' ';
    }
    document.getElementById('result_b1').innerHTML = display;
}
function clickedb2() {
    var n = prompt('Nhap gia tri cua N')
    var gt = 0
    function giaithua(x)
    {
        var giaithua=1;
        for(var i=1;i<=n;i++)
        {
            giaithua*=i
        }
        alert('Giai Thua bang '+giaithua)
    }
var n=giaithua(n)
}
function clickedb3() {
    for(let i=1;i<7;i++){
        document.write("<br>")
        for( let j=1;j<i;j++){
            document.write("*")
        }       
    }
    for(let i=1;i<7;i++){
        document.write("<br>")
        for( let j=6;j>i;j--){
            document.write("*")
        }       
    }
    let i,n,j;
    n=6;
    for(i=0;i<n;i++){
     document.write("<br>");
    for(j=n;j>i;j--){
      document.write("&ensp;")
     }
     for(j=0;j<i;j++){
      document.write("*")
      }
        }
    for(i=0;i<n;i++){
      document.write("<br>");
      for(j=0;j<i;j++){
        document.write("&ensp;")
      }
      for(j=i;j<n;j++){
        document.write("*")
      }
    }
}
function clickedb4() {
    let cd=20;
    let cr=5;
  
    for(let i=1;i<=cr;i++){
      for(let j=1;j<=cd;j++){
        if(i==1 || j==1 ||i==cr||j==cd)
          document.write("*")
        else
        document.write("&ensp;")
      }
      document.write("<br>")
    }
}
function clickedb5() {
    for(let i=1;i<7;i++) {
        for(let j=1;j<=7;j++){
            if(!((i == 1 && (j == 1 || j == 4 || j == 7))
			|| (i == 4 && (j == 1 || j == 7))
			|| (i == 5 && (j <= 2 || j >= 6))
			|| (i == 6 && (j <= 3 || j >= 5)))) {
                document.write("*");
            }
            else document.write("&nbsp;&nbsp;");
        }
        document.write("<br>");
    }
}
function clickedb6() {
    
}