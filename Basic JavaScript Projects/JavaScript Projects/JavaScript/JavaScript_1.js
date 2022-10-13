function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// getElementbyClassName() method

function Hello_World() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"; // will only change the first h3 class
}

// Use <canvas> to create graphics

    // Hello World text
    var c = document.getElementById("ID_Name");
    var ctx = c.getContext("2d");
    ctx.font = "70px Arial";
    ctx.fillText("Hello World", 70, 120);

    // Linear Gradient
    var c = document.getElementById("LinearGradient");
    var ctx = c.getContext("2d");

        // Create gradient
        var grd = ctx.createLinearGradient(10, 30, 300, 0);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 500, 300);

