// JavaScript source 
function bitcoin() {
    var price = prompt("Enter the amount");
    var bit_price = 500000;
    var number = bit_price % price;
    document.getElementById("btn1").innerHTML = "you will get" + number;

}

function binance() {
    var price = prompt("Enter the amount");
    var bit_price = 100000;
    var number = bit_price % price;
    document.getElementById("btn2").innerHTML = "you will get" + number;

}

function Ether() {
    var price = prompt("Enter the amount");
    var bit_price = 3500000;
    var number = bit_price % price;
    document.getElementById("btn3").innerHTML = "you will get" + number;

}
