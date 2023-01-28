export default function setSlider() {
    let myRange = document.getElementById("myRange");
    let myRangeOutput = document.getElementById("myRangeOutput");
    let myRangeButton = document.getElementById("myRangeButton");


    myRange?.addEventListener("input", (e) => myRangeOutput.innerText = e.target.value);
    myRange?.addEventListener("keydown", (e) => {
        e.preventDefault();
        alert("Nice try!");
    })
    myRangeButton?.addEventListener("click", checkAge);

    function checkAge() {
        let age = parseInt(myRangeOutput.innerHTML);
        if (age < 1) {
            alert("What are you, a ghost?");
        } else if (age > 100) {
            alert("Come on, you're not that old!")
        } else {
            alert("Okay, you're " + age + " years old!");
            document.querySelector(".slidecontainer").classList.add("o-50");
            myRange.classList.add("d-none");
            myRangeButton.removeEventListener("click", checkAge);
            winCount ++;
        }
    }
}