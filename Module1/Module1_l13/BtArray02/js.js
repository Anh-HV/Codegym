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