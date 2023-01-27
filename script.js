'use strict'

import setClickBox from "./scripts/clickBox.js";
import setColorGame from "./scripts/colorGame.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    setClickBox();
    setColorGame();
}

