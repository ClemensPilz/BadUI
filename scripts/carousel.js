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
        let resultDiv = document.createElement("div");
        let seconds = (Date.now() - startTime) / 1000;
        let minutes = Math.floor(seconds / 60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
        extraSeconds = extraSeconds.toString().substring(0, 2);
        resultDiv.innerHTML = 'It took you ' + minutes + ' Minutes and ' + extraSeconds + ' Seconds to complete the Challenge!';
        document.body.appendChild(resultDiv);
        let resultObj = {
            minutes: minutes,
            seconds: extraSeconds
        };
        checkStorage(resultObj);
    }

    //Checks sessionstorage for the results of the last playthrough
    function checkStorage(obj) {
        if (sessionStorage.getItem("result")) {
            let prevObj = sessionStorage.getItem("result");
            prevObj = JSON.parse(prevObj);
            let prevDiv = document.createElement("div");
            let prevString = document.createTextNode("Your previous result was: "
                + prevObj.minutes + " minutes, " + prevObj.seconds + " seconds!");
            prevDiv.appendChild(prevString);
            document.body.appendChild(prevDiv);
        }
        sessionStorage.setItem("result", JSON.stringify(obj));
    }

    function go() {
        if (active) {
            console.log(carousel.style.left);
            leftVal = leftVal - 5;
            carousel.style.left = leftVal.toString() + "px";

            if ((leftVal * (-1)) % 1000 == 0) {
                leftVal = 0;
            }
            setTimeout(go, 10);
        }
    }
}