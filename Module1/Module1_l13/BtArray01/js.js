function clickb1() {
    let value =prompt("Nhap so luong phan tu cua mang","");
    let arr=[];
    let x="";
    let count=0;
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>10){
            x=x+" "+arr[i];
            count++
        }   
    }
    alert("Co"+count+" "+"phan tu lon hon 10 la:"+x);
}
function clickb2() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    for(let i=0;i<value;i++){
        let a=parseInt(prompt("Nhap Phan tu thu: "+(i+1),""));
        arr[i]=a;
    }
    let max=arr[0];
    let index=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max) { 
            max=arr[i];    
            index=i;    
        }
    }
   alert("Gia tri lon nhat la:"+max+"vi tri:"+index)
}
function clickb3() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    for(let i=0;i<value;i++){
        let a=parseInt(prompt("Nhap Phan tu thu: "+(i+1),""));
        arr[i]=a;
    }
    let max=arr[0];
    let index=0;
    let sum=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max) { 
            max=arr[i];    
            index=i;    
        }
    }
    for(let j=0;j<arr.length;j++){
        sum+=arr[j];
    }
    alert("Average:"+(sum/arr.length));
   alert("Gia tri lon nhat la:"+max+"vi tri:"+index);
}
function clickb4() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    for(let i=0;i<value;i++){
        let a=parseInt(prompt("Nhap Phan tu thu: "+(i+1),""));
        arr[i]=a;
    }
    console.log(arr);
    arr.reverse();
    console.log(arr);
}
function clickb5() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    let count=0;
    let x="";
    for(let i=0;i<value;i++){
        let a=parseInt(prompt("Nhap Phan tu thu: "+(i+1),""));
        arr[i]=a;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            x=x+arr[i]+",";
            count++;
        }
    }
    count>0 ? console.log("Co "+count+ "Phan tu nho hon 0 "+x) :
    console.log("Khong co phan tu nao nho hon 0")
     
}
function clickb6() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    let count=0;
    let x="";
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    for(let i=0;i<arr.length;i++){
        if (arr[i]==5){
            console.log("5 is in the array")
        }
        else  console.log("5 is not in the array")
    }
   
}
function clickb7() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    let count=0;
    let x="";
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    for(let i=0;i<arr.length;i++){
       if(arr[i]==5){
           arr.splice(i,1);
       }
     }
    console.log(arr)
}
function clickb8() {
    let value =parseInt(prompt("Nhap so luong phan tu cua mang",""));
    let arr=[];
    let count=0;
    let x="";
    for(let i=0;i<value;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr[i]=a;
    }
    console.log(arr);
    arr.sort(function(a,b){
        return b-a;
    });
    console.log(arr)
}
function clickb9() {
    let value1 =parseInt(prompt("Nhap so luong phan tu cua mang 1",""));
    let value2 =parseInt(prompt("Nhap so luong phan tu cua mang 2",""));
    let arr1=[];
    let arr2=[];
    let count=0;
    let x="";
    for(let i=0;i<value1;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr1[i]=a;
    }
    for(let i=0;i<value2;i++){
        let a=prompt("Nhap Phan tu thu: "+(i+1),"");
        arr2[i]=a;
    }
    let arr3=arr1.concat(arr2);
    console.log(arr3)
}