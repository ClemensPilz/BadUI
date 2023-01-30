//Need global variable to keep track of wins
let winCount = 0;
let startTime;

//Use this cheat via console if you need some cat-content to cheer you up
function cat() {
    document.body.innerHTML = "";
    document.body.style.boxShadow = "0 0 0 white";
    let img = document.createElement("img");
    img.src = "./images/cat.gif";
    document.body.appendChild(img);
    document.body.style.backgroundColor = "white";
    let resultDiv = document.createElement("div");
    let seconds = (Date.now() - startTime) / 1000;
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
    console.log(typeof extraSeconds);
    extraSeconds = extraSeconds.substring(0, 2);
    resultDiv.innerHTML = 'It took you ' + minutes + ' Minutes and ' + extraSeconds + ' Seconds to complete the Challenge!';
    document.body.appendChild(resultDiv);
}