export default function greeting() {
    let greeting = document.getElementById("greeting");
    let enter = document.getElementById("enter");

    greeting?.addEventListener("click", show);

    function show(e) {
        let children = Array.from(greeting.querySelectorAll(".d-none"));
        console.log(children);
        children[0].classList.remove("d-none");
        if (children.length <= 1) {
            greeting.removeEventListener("click", show);
            enter.addEventListener("click", removeGreeting);
        }
    }

    function removeGreeting() {
        alert("Ok, get in if you really want to!");
        alert("Solve every section of my page and you will see some cute kitties!");
        prompt("Got it?");
        prompt("Really?");
        prompt("Really really?");
        prompt("Really really really?");
        prompt("But seriously, did you really get it?");
        alert("Move on!");
        greeting.classList.add("d-none");
        document.querySelector(".blockLayer").classList.add("d-none");
    }
}