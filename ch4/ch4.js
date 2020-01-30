var input = [ -1, 5, "cat", false, 10.2, true, "dog" ];

var obj = define(input);
alert(JSON.stringify(obj, null, 4));
document.getElementById("output").innerHTML = display(obj);

function define(x) {
var result = {
    String: [],
    Number: [],
    Boolean: []
};

    for (var i = 0; i < x.length ; i++) {
        if(typeof x[i] === "string"){
            result.String.push(x[i]);
        }
        else if(typeof x[i] === "number"){
            result.Number.push(x[i]);
        }
        else if(typeof x[i] === "boolean"){
            result.Boolean.push(x[i]);
        }
    }

    return result;
}

function display(obj) {
    var string = JSON.stringify(obj, null, 4);
    return string;
}