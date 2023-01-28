export default async function setCarousel() {
    let carousel = document.getElementById("carousel");

    carousel?.addEventListener("click", go);
    let leftVal = 0;
    carousel.style.left = leftVal.toString() + "px";

    function go(e) {
        console.log(carousel.style.left);
        leftVal = leftVal - 10;
        carousel.style.left = leftVal.toString() + "px";

        if ((leftVal * (-1)) % 1000 == 0) {
            leftVal = 0;
        }
        setTimeout(go, 5);
    }
};