//Need global variable to keep track of wins
let winCount = 0;

//Use this cheat via console if you need some cat-content to cheer you up
function cat() {
    document.body.innerHTML = "";
    document.body.style.boxShadow = "0 0 0 white";
    let img = document.createElement("img");
    img.src = "./images/cat.gif";
    document.body.appendChild(img);
    document.body.style.backgroundColor = "white";}