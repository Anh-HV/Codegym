let a=0;
let arr = Array();

function displayProduct() {
    let e = "<table>" //element
    for(let i=0; i<arr.length; i++){
        e+=
        "<tr>"+
            "<td>"+(i+1)+"."+arr[i]+"</td><td></td>"+
            "<td><button id='btdEdit' onclick='editProduct(" +i+");'>Edit</button></td>" +
            "<td><button id='btdRemove' onclick='removeProduct(" +i+");'>Remove</button></td>"+
        "</tr>";
    }
    e=e+"</table>";
    document.getElementById("result").innerHTML=e;

    document.getElementById("product").value="";
}

displayProduct();

function addProduct() {
    let newProduct = document.getElementById("product").value;
    if(newProduct == ""){
        console.log("Please enter a product")
    } else{
    arr.push(newProduct);
    console.log("Add "+ newProduct + " successful")
    displayProduct();
    }
}
function removeProduct(index) {
    var r = confirm("Are you sure you want to delete");
    if(r==true){
        arr.splice(index,1);
        displayProduct(arr);
    }
}
function editProduct(index){
    let value = prompt("Change product to");
    arr[index] = value;
    displayProduct();
}