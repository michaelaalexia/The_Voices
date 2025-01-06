var width=400;
var difference=30;
var intervalID=0;

function increase() {
    setInterval(zoomIn, 20);
}

function zoomIn() {
    if(width<400){
        width=width + difference;
        document.getElementById("symph").style.width=width;
    }

    else {
        clearInterval(intervalID);
    }
}

function increase() {
    setInterval(zoomOut, 20);
}

function zoomOut() {
    if(width>400){
        width=width + difference;
        document.getElementById("symph").style.width=width;
    }

    else {
        clearInterval(intervalID);
    }
}