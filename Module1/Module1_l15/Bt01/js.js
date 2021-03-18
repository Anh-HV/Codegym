function alertMessage() {
    alert("Xin chao");
}
function Bai2() {
    let value =parseInt(prompt("Nhap so bat ky"));
    alert("So ban vua nhap la:" +(value+1))
}
function Bai3() {
    let a = parseInt(prompt("Nhap so thu nhat:"));
    let b = parseInt(prompt("Nhap so thu hai"));
    function checkNumber(a,b){
        if(a>b){
            return a;
        }
        else return a+b;
    }
    alert(checkNumber(a,b));
}
function Bai4() {
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = 0;
    alert(result);
    result = addNumbers(); 
    alert(result);
}
function Bai5() {
    let star1=["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let star2=["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major," ,"Leo"];
    function checkStar(checkValue){
        let index = star1.indexOf(checkValue);
        if(index ==-1){
            alert("Khong tim thay ngoi sao nay");
        }
        else {
            alert("Chom sao cua ngoi sao do la: " + star2[index])
        }
    }
    let value = prompt("Enter a name of star");
    checkStar(value);
}