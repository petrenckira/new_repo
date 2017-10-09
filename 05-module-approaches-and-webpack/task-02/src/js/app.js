import { pageAwesomeClassToggle } from './methods/amazing-method.js';
import { scrollToElement } from './methods/amazing-scroll-method.js';
import Constants from './constants/constants.js';

function init() {
    addEventListeners();
}

function addEventListeners() {
    $('#awesome-button').click(makePageAwesome);
}

function makePageAwesome(event) {
    pageAwesomeClassToggle(Constants.PARALLAX_CLASS);
    scrollToElement($(event.target), Constants.ANIMATION_SPEED);
}

export default {
    init
}