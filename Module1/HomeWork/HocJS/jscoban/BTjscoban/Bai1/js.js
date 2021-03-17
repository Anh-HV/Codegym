function clicked(){
    var ly =document.getElementById("ly").value;
    var hoa=document.getElementById("hoa").value;
    var sinh=document.getElementById("sinh").value;
    var a =parseFloat(ly);
    var b =parseFloat(hoa);
    var c =parseFloat(sinh);
    var sum =(a+b+c)/3;
    document.getElementById("sum").innerHTML=sum;
    }