function clickedb1() {
    for(let i=0;i<=100;i++){    
        if(i=99){
            document.getElementById("result_b1").innerHTML=i;
            alert("Done");
            break;
        }
    }
}
function clickedb2() {
    do{
        var a =prompt("Nhap nhiệt độ hiện tại","");
        if(a>100)  alert("Giam nhiet do");
         if(a<20) alert("Tang nhiet do")
    }while(a<20 || a>100);
    
}
function clickedb2() {
    do{
        var a =prompt("Nhap nhiệt độ hiện tại","");
        if(a>100)  alert("Giam nhiet do");
         if(a<20) alert("Tang nhiet do")
    }while(a<20 || a>100);
    
}
function clickedb3() {
    function fibonacci(num){
        if(num<=1) return 1
        else return fibonacci(num-1) + fibonacci(num-2);
    }
    let display ='';
    for(i=0;i<=20;i++){
        display += fibonacci(i)+' ';
    }
    document.getElementById('bai3').innerHTML = display;
}
function clickedb4() {
    var count=1;
    function fibonacci(num){
        if(num<=1) return 1
        else return fibonacci(num-1) + fibonacci(num-2);
    }
    for(i=0;i<=20;i++){
        if(fibonacci(i)%5==0){
            document.getElementById('bai4').innerHTML = fibonacci(i);
            break;
        }
    }
}
function clickedb5() {
    function fibonacci(num){
        if(num<=1) return 1
        else return fibonacci(num-1) + fibonacci(num-2);
    }
    let display =0;
    for(i=0;i<=20;i++){
        display += fibonacci(i);
    }
    document.getElementById('bai5').innerHTML = display;
}
function clickedb6() {
    count=0;
    sum=0;
    for(let i=0;i<1000;i++){
        if(i%7==0){
            sum=sum+i;
            console.log(i);
            count++
        }
        document.getElementById('bai6').innerHTML = sum;
        if(count==30) break;
    }
}
 