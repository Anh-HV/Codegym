function clicked(){
    var demo= document.getElementById("demo").value;
    var bi=3.14;
    var r = parseFloat(demo);
    var cv=2*r*bi;
    var s=bi*bi*r;
    document.getElementById("cv").value=cv;
    document.getElementById("dt").value=s;
    }