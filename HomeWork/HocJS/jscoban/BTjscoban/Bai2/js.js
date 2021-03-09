function clicked(){
    var doc =document.getElementById("demo").value;
    var c=parseFloat(doc);
    let f=(c*9)/5+32;

        document.getElementById("test").innerHTML="="+f+"F";
    }