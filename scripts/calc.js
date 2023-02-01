import shuffle from "./shuffle.js";

export default function setCalc() {

    let calc = document.getElementById("calc");
    let calcQuestion = document.getElementById("calcQuestion");
    let calcAnswer = document.getElementById("calcAnswer");
    setup();
    calcAnswer.addEventListener("change", check);

    function setup() {
        //Generate options for your dropdown-menu and shuffle them.
        let answers = [];
        for (let i = 1; i < 41; i++) {
            answers.push(i);
        }
        shuffle(answers);
        //Append them to your input.
        calcAnswer.innerHTML = "";
        let defaultSelection = document.createElement("option");
        defaultSelection.setAttribute("selected", "selected");
        defaultSelection.innerHTML = " ";
        calcAnswer.appendChild(document.createElement("div").appendChild(defaultSelection));
        for (let i = 0; i < answers.length; i++) {
            let option = document.createElement("option");
            let j = answers[i];
            option.innerHTML = j.toString();
            option.setAttribute("value", j.toString());
            calcAnswer.appendChild(option);
        }
        //Generate a Number from 1 to 20 to be multiplied with 2.
        let question = Math.floor(Math.random() * 20) + 1;
        calcQuestion.innerHTML = question.toString();
    }

    //Compare user-input to the right answer.
    function check(e) {
        let answer = 2 * parseInt(calcQuestion.innerHTML);
        if (answer === parseInt(e.target.value)) {
            winCalc();
        } else {
            loseCalc();
        }
    }

    function winCalc() {
        alert("That's correct! You win!");
        calcAnswer.removeEventListener("change", check);
        calc.style.pointerEvents = "none";
        calc.classList.add("o-50");
        winCount++;
    }

    function loseCalc() {
        alert("No way! You lose!");
        setup();
    }
}