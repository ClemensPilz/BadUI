'use strict'

import setGreeting from "./scripts/greeting.js";
import setClickBox from "./scripts/clickBox.js";
import setColorGame from "./scripts/colorGame.js";
import setSlider from "./scripts/slider.js";
import setCarousel from "./scripts/carousel.js";
import setCalc from "./scripts/calc.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    setGreeting();
    setClickBox();
    setColorGame();
    setSlider();
    setCarousel();
    setCalc();
}