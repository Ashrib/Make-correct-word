
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