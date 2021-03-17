function clickb1() {
    let a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];
    for(var i in a){
        console.log("Row"+i);
        for(j in a[i]){
            console.log(a[i][j]);
        }
    }
}
function clickb2() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    console.log(arr);
    arr.reverse();
    console.log(arr.toString());
}
function clickb3() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    let count=0;
    let x="";
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    for(let i=0;i<arr.length;i++){
        if(parseFloat (arr[i])>0 || parseFloat (arr[i]<0)) {
            x+=arr[i];
            count++;
        }
    }
    console.log("So phan tu la so:"+count)
}
function clickb4() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    let count=0;
    let x="";
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    for(let i=0;i<arr.length;i++){
        if(parseFloat (arr[i])>0 || parseFloat (arr[i]<0)) {
            x+=arr[i];
            count++;
        }
    }
    console.log("So phan tu la chu:"+(arr.length-count));
}
function clickb5(){
    let str1 = prompt("Nhap chuoi thu 1");
    let str2 =prompt("Nhap chuoi thu 2");
    if(str1.localeCompare(str2)==0){
        alert("Chuoi 1 bang chuoi 2");
    }
    else alert("Chuoi 1 khac chuoi 2")
}
function clickb6(){
    let str1 = prompt("Nhap chuoi thu 1");
    console.log(str1);
    console.log(str1.replaceAll("_","-"))
}