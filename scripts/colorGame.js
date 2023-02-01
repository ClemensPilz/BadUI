import shuffle from "./shuffle.js";

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
            let colorValues = ["#1f4564", "#0f2130"];
            let randomColor = Math.floor(Math.random() * 2).toString();
            card.style.backgroundColor = colorValues[randomColor];

            card.addEventListener("click", checkCard);
            colorArea.appendChild(card);
        }


        //Distribute colorStrings randomly within your colorCards and add their value as data-val
        let colorStrings = ["dark", "darker", "drake", "darker", "darker", "raked", "rake", "draked", "rekad"];
        shuffle(colorStrings);
        let cards = document.querySelectorAll(".colorCard");
        for (let j = 0; j < 9; j++) {
            cards[j].innerText = colorStrings[j];
            cards[j].dataset.val = colorStrings[j];
        }
    }

    function checkCard(e) {
        let card = e.currentTarget;
        if (card.dataset.val === "darker") {
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