import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";
import {MDCRipple} from '@material/ripple';
import {getCorrectEventName} from '@material/animation';
import {MDCTextField} from '@material/textfield';

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    return new MDCRipple(el);
});

const eventToListenFor = getCorrectEventName(window, 'animationstart');

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));