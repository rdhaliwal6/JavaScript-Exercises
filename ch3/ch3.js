
function inital() {
    document.getElementById("output").innerHTML = "";
    var input = document.getElementById("input").value;
    // var output = document.getElementById("output");
    heeHaw(input);
}

function heeHaw(x) {
    if (isNaN(x)) {
        document.getElementById("output").innerHTML += ("Enter in a number <br>");
        }
    for(var i = 1; i<=x; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                document.getElementById("output").innerHTML += ("Hee Haw! <br>");
                console.log("Hee Haw!");
            } else if ((i % 3) === 0) {
                document.getElementById("output").innerHTML += ("Hee! <br>");
                console.log("Hee!");
            } else if ((i % 5) === 0) {
                document.getElementById("output").innerHTML += ("Haw! <br>");
                console.log("Haw!");
            } else
                document.getElementById("output").innerHTML += (i + "<br>");
                console.log(i);
    }
}