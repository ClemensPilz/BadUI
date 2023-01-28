export default function setColorGame() {
    let colorArea = document.getElementById("colorArea");
    if (colorArea) { build() }

    //Declare variables for the amount of times a user has clicked on the right colorCard
    let clickCount = 0;

    //Add colorCard*9 to the colorArea
    function build() {
        for (let i = 0; i < 9; i++) {
            let card = document.createElement("div");
            card.classList.add("colorCard");

            //Set a random backgroundColor for your colorCard
            let colorValues = ["#5200ff", "#d6f31f"];
            let randomColor = Math.floor(Math.random() * 2).toString();
            card.style.backgroundColor = colorValues[randomColor];

            card.addEventListener("click", checkCard);
            colorArea.appendChild(card);
        }


        //Distribute colorStrings randomly within your colorCards and add their value as data-val
        let colorStrings = ["red", "yellow", "red", "green", "green", "blue", "blue", "yellow", "yellow"];
        shuffle(colorStrings);
        let cards = document.querySelectorAll(".colorCard");
        for (let j = 0; j < 9; j++) {
            cards[j].innerText = colorStrings[j];
            cards[j].dataset.val = colorStrings[j];
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function checkCard(e) {
        let card = e.currentTarget;
        if (card.dataset.val === "yellow") {
            /*clickCount ++;*/
            card.removeEventListener("click", checkCard);
            console.log(++clickCount);
            if (clickCount >= 3) {
                alert("You did it!")
                colorArea.classList.add("o-50");
                winCount ++;
            }
        } else {
            alert("You failed! Get lost, robot!");
            clickCount = 0;
            colorArea.innerHTML = "";
            build();
        }

    }
}