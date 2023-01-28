'use strict'

import greeting from "./scripts/greeting.js";
import setClickBox from "./scripts/clickBox.js";
import setColorGame from "./scripts/colorGame.js";
import slider from "./scripts/slider.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    greeting();
    setClickBox();
    setColorGame();
    slider();
}

