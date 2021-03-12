var text = "";
var num = 1000;
    for (var i = 1; i <num; i++) {
        if (i<10){
            text += "&nbsp&nbsp" + i + "<br>"}
        else if (i>9 && i<100){
            text += "&nbsp" + i + "<br>"}
        else{
            text += i + "<br>";}
    }
    document.getElementById("number-side").innerHTML = text;