var toHide = document.getElementById("alphabets-boxes");
toHide.style.display = "none";

function startGame() {
    toHide.style.display = "flex";

    var all_Letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var boxes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    var randomLetters = [];

    for(var k=0; k<=boxes.length; k++) {
        var random_Nbr = Math.round(Math.random()*25);
    for(var i = 0; i<=all_Letters.length; i++){
        if(random_Nbr === i){
            randomLetters.push(all_Letters[i]);
        }
    }
    };

    for(var g = 0; g <= boxes.length; g++) {
        var vr = g;
        document.getElementById(vr).innerText = randomLetters[g];
    };
}

var getLetter;
function getValue(x) {
    switch(x) {
        case "0" :
            getLetter += document.getElementById("0").innerText;
            break;
        case "1" :
            getLetter += document.getElementById("1").innerText;
            break;
        case "2" :
            getLetter += document.getElementById("2").innerText;
            break;
        case "3" :
            getLetter += document.getElementById("3").innerText;
            break;
        case "4" :
            getLetter += document.getElementById("4").innerText;
            break;
        case "5" :
            getLetter += document.getElementById("5").innerText;
            break;
        case "6" :
            getLetter += document.getElementById("6").innerText;
            break;
        case "7" :
            getLetter += document.getElementById("7").innerText;
            break;
        case "8" :
            getLetter += document.getElementById("8").innerText;
            break;
        case "9" :
            getLetter += document.getElementById("9").innerText;
            break;
        case "10" :
            getLetter += document.getElementById("10").innerText;
            break;
        case "11" :
            getLetter += document.getElementById("11").innerText;
            break;
        case "12" :
            getLetter += document.getElementById("12").innerText;
            break;
        case "13" :
            getLetter += document.getElementById("13").innerText;
            break;
        case "14" :
            getLetter += document.getElementById("14").innerText;
            break;
        case "15" :
            getLetter += document.getElementById("15").innerText;
            break;
        case "16" :
            getLetter += document.getElementById("16").innerText;
            break;
        case "17" :
            getLetter += document.getElementById("17").innerText;
            break;
        case "18" :
            getLetter += document.getElementById("18").innerText;
            break;
        case "19" :
            getLetter += document.getElementById("19").innerText;
            break;
        case "20" :
            getLetter += document.getElementById("20").innerText;
            break;
        case "21" :
            getLetter += document.getElementById("21").innerText;
            break;
        case "22" :
            getLetter += document.getElementById("22").innerText;
            break;
        case "23" :
            getLetter += document.getElementById("23").innerText;
            break;
        case "24" :
            getLetter += document.getElementById("24").innerText;
            break;
        case "25" :
            getLetter += document.getElementById("25").innerText;
            break; 
    }
    var found = getLetter;
    document.getElementById("user-input").value = found;
}