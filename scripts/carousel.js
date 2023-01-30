export default async function setCarousel() {
    let carousel = document.getElementById("carousel");
    let winButton = document.getElementById("winButton");
    let active = true;

    carousel?.addEventListener("click", firstGo);
    let leftVal = 0;
    carousel.style.left = leftVal.toString() + "px";


    function firstGo() {
        if (winCount >= 4) {
            carousel.removeEventListener("click", firstGo);
            winButton.addEventListener("click", win, true);
            go();
        } else {
            alert("Nice try - solve every task before you proceed!")
        }
    }

    function win() {
        alert("You Win!");
        carousel.classList.add("o-50");
        active = false;
        winButton.removeEventListener("click", win, true);
        setTimeout(catTime, 1000);
    }

    function catTime() {
        document.body.innerHTML = "";
        document.body.style.boxShadow = "0 0 0 white";
        let img = document.createElement("img");
        img.src = "./images/cat.gif";
        document.body.appendChild(img);
        document.body.style.backgroundColor = "white";
    }

    function go() {
        if (active) {
            console.log(carousel.style.left);
            leftVal = leftVal - 5;
            carousel.style.left = leftVal.toString() + "px";

            if ((leftVal * (-1)) % 1000 == 0) {
                leftVal = 0;
            }
            setTimeout(go, 1);
        }
    }
}