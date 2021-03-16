function clickedb1() {
    var count = 1;
    while (count <2019){
        console.log(count);
        count++;
    }
}
function clickedb2() {
    let sum = 0;
    for(let i=1;i<=50;i++){
        sum+=i;
    }
    document.getElementById("result_b2").innerHTML=sum;  
}
function clickedb3() {
  var count=0;
  var sum=0;
  for(let i=1;i<=123123;i++){
    if(i%2==0){
        sum+=i;
        count++;
        console.log(sum)
    }
    if(count==50){
        break;
    }
  }
}
function clickedb4() {
    var a=parseInt(prompt("Nhap so muon tinh giai thua",""));  
    let sum=0;
    document.getElementById("result_b4").innerHTML=giaithua(a);
    function giaithua(a) {
        if(a==1)return 1;
        return a*giaithua(a-1)
    }    
}
function clickedb5() {
    let count=0;
    let sum=0;
    for(let i=0;i<=1002;i++){
        if(i%5==0){
            sum+=i;count++;
            document.getElementById("result_b5").innerHTML=sum;
        }
        if(count==20){
            break;
        }
    }
}
function clickedb6() {
    var num =parseInt(prompt("Nhap so luong so nguyen to"," "));
    for(let i=2;i<num;i++){
        if(checknt(i)){
            console.log(i);
        }
    }

 function checknt(num) {
    for( i=2;i<num;i++)
    {
        if (num %i == 0)  return false;  
    }
    return true;
}
}
function clickedb7() {
    var n=parseInt(prompt("Kiem tra so hh:",""));
    if(checkhh(n)){
        console.log("hoan hao");
        document.getElementById("result_b7").innerHTML=n+" "+":La so Hoan hao";
    }
    else {console.log("Khong hoan hao");
    document.getElementById("result_b7").innerHTML=n+" "+":Không la so Hoan hao";   
}
    function checkhh(a){
        let sum=0;
        for(let i=0;i<a;i++){
            if(a%i==0){
                sum+=i;
            }
        }
        if(sum==a) return true;
        return false;
    }
}
function clickedb8() {
    function fibonacci(num){
        if(num<=1) return 1
        else return fibonacci(num-1) + fibonacci(num-2);
    }
    let display ='';
    for(i=0;i<=20;i++){
        display += fibonacci(i)+' ';
        if(i==13){
            alert("So fibonacci thu 13 la:"+ fibonacci(13))
        }
    }
    document.getElementById('result_b8').innerHTML = display;
}
function clickedb9() {
    let Sodan=6000000;
    for(let i=1;i<=10;i++){
        Sodan=Sodan+(Sodan*18/100);
    }
    console.log(Sodan);
}