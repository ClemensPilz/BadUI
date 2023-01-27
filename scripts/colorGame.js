export default function setColorGame() {
    let colorArea = document.getElementById("colorArea");

    //Declare variables for the amount of times a user has clicked on the right colorCard
    let clickCount = 0;

    if (colorArea) {
        document.addEventListener("mousemove", build);
    }

    //Add colorCard*9 to the colorArea
    function build() {
        document.removeEventListener("mousemove", build);
        let i = 0;
        while (i < 9) {
            let card = document.createElement("div");
            card.classList.add("colorCard");

            //Set a random backgroundColor for your colorCard
            let colorStrings = ["red", "green", "blue", "yellow"];
            let randomColor = Math.floor(Math.random() * 4).toString();
            card.style.backgroundColor = colorStrings[randomColor];

            card.addEventListener("click", checkCard);

            colorArea.appendChild(card);
            i++;
        }


        //Distribute colorStrings randomly within your colorCards and add their value as data-val
        let colorStrings = ["red", "red", "red", "green", "green", "blue", "blue", "yellow", "yellow"];
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
        if (card.dataset.val === "red") {
            /*clickCount ++;*/
            card.removeEventListener("click", checkCard);
            console.log(++clickCount);
            if (clickCount >= 3) {
                alert("You did it!");
            }
        } else {
            alert("You failed! Get lost, robot!");
            clickCount = 0;
            colorArea.innerHTML = "";
            build();
        }

    }
}