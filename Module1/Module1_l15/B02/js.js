function Bai1() {
    let value = prompt("Nhap so can tinh binh phuong");
    function tinhBinhPhuong(value){
        return value*value;
    }
    console.log(tinhBinhPhuong(value));
}
function Bai2() {
    let value = prompt("Nhap ban kinh hinh tron");
    function tinhChuViHinhTron(r) {
        return 2*r*Math.PI;
    }
    function tinhDienTichHinhTron(r) {
        return r*r*Math.PI;
    }
    console.log("Chu vi hinh tron la:"+tinhChuViHinhTron(value));
    console.log("Dien tich hinh tron la:"+tinhDienTichHinhTron(value));
}
function Bai3() {
    let value =+ prompt("Nhap so can tinh giai thua");
    function tinhGiaiThua(num) {
        let gt=1;
        for (let i=num;i>0;i--) {
            gt*=i;
        }

        return gt;
        
    }
    console.log(tinhGiaiThua(value));
}
function Bai4() {
    let value=+prompt("Nhap ky tu bat ky");     
    function checkNumber(num) {
        if(Number.isNaN(num)==true){
            alert("Khong phai la ky tu so");
        }
        else{
            alert("la ky tu so");
        }
    }
    console.log(checkNumber(value))
}
function Bai5() {
    function checkMin(a,b,c) {
        let min=a;
        if(min<b && min>c) min=b;
        if (min<c && min>b) min=c;
        return min;
    }
    console.log(checkMin(-6,3,4));
}
function Bai6() {
    let value=+prompt("Nhap ky tu bat ky");     
    function checkNumber(num) {
        if(Number.isNaN(num)==true){
            console.log("Khong phai la ky tu so");
            return true;
        }
        else{
            console.log("la ky tu so");
            return false;
        }
    }
    function checkInteger(value) {
        if(checkNumber(value)==false && value>0){
            console.log("So duong")
        }
        else console.log("So am");
    }
    checkInteger(value);
}
function Bai7() {
    let value1=+prompt("Nhap ky tu bat ky");   
    let value2=+prompt("Nhap ky tu bat ky"); 
    
    function swapNumber(a,b) {
        console.log("So ban nhap la:"+b+","+a);
    }
    swapNumber(value1,value2);
}
function Bai8() {
    let arr1=[7,8,5,6,4,5,2,1,4,7,8,9,2,1,4];
    console.log(arr1);
    function swapArray(arr) {
        let first=0;
        let last=arr.length-1;
        while(first<last) {
            let swap=arr[first];
            arr[first]=arr[last];
            arr[last]=swap;
            first++;
            last--;
        }   
        console.log(arr) ;
        return;
    }
    swapArray(arr1);
}
function Bai9() {
    let arr1=["a","b","c","d","e","f","g","h","i","k","a","a"];
    let value= prompt("Nhap ky tu bat ky");
    function checkArray(arr,value) {
        let count=0;
       for(let i=0; i<arr.length; i++){
           if(value==arr[i]){
            count++;
           }
       }
       count==0?console.log("khong tim thay ki tu") : console.log("So lan xuat hien la"+count);
    }
    checkArray(arr1,value);
}