function myFunction(a, b) {
    // var a = 5;
    // var b = 6;
    return a + b; //The function returns the sum of a and b
}

function arrays() {
    var pens;
    pens = new Array("red", "green", "orange", "blue", "purple");
    markers = pens;

    console.log(markers);

    for (i = 0; i < markers.length; i++) {
        alert(markers[i]);
    }

    alert("Length of array is: " + markers.length)
}