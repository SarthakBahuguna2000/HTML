$(document).ready(function () {
    $("#btn1").click(function () {
        var x = factorial(6);
        document.getElementById("btn1").innerHTML = x;
    });
});


$(document).ready(function () {
    $("#btn2").click(function () {
        var x = add(6);
        document.getElementById("btn2").innerHTML = x;
    });
});
$(document).ready(function () {
    $("#btn3").click(function () {
        var x = diff(10);
        document.getElementById("btn3").innerHTML = x;
    });
});





function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

function add(x) {
    let counter = 5;
    function plus() { x += counter; }
    plus();
    plus();
    return x;
}
function diff(x) {
    let counter = 10;
    function plus() { x -= counter; }
    diff();
    diff();
    return x;
}
