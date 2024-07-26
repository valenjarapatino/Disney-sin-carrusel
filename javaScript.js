

let monsters = document.getElementById("monsters");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");

monsters.onclick = function() {

        imgchange.src = "disney+/monsters/background.png";
}
b 
blueBtn.onclick = function() {
    imgchange.src = "./images/arkana_blue_md.jpg";
}

blackBtn.onclick = function() {
    imgchange.src = "./images/arkana_black_md.jpg";
}