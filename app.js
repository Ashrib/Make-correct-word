var toHide = document.getElementById("content");
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
        var getId = g;
        document.getElementById(getId).innerText = randomLetters[g];
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
    
    document.getElementById("user-input").value = getLetter;
};
function del() {
    var getText = document.getElementById("user-input").value;
    document.getElementById("user-input").value = getText.substring(0, getText.length-1);
};

var pointCount = 0;
function submit() {
    var check_word = document.getElementById("user-input").value;
    
    if(check_word === "" || check_word.length<=1 || check_word.length>22) {
        alert("Word should be greater than 1 or less than 23");
    }
    else{
        for(var v=0; v < Dictonery.length; v++) {
            if(check_word === Dictonery[v]) {
                pointCount ++;
                document.getElementById("points").innerText = pointCount;
                break;
            }
            else{
                alert("wrong");
                document.getElementById("wrong-ul").innerHTML += "<li>" + check_word + "</li>";
                break;
            }
        }
    };
    document.getElementById("user-input").value = "";
};
var divWords = document.getElementById("alphabets-boxes");
var divSubmit = document.getElementById("submit");
function timer() {
    divWords.style.display = "none";
    divSubmit.style.display = "none";
}
setTimeout(timer, 5000);