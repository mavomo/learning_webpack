import _ from 'lodash';
import printer from './printer/print'
import {cube} from "./math";

const component = () => {
    //let element = document.createElement('div');
    let element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)

    ].join('\n\n');

  /*  const clickableBtn = createAClickableButton();

    element.appendChild(clickableBtn);*/
    return element;
};

function createAClickableButton() {
    var btnElement = document.createElement('button');
    btnElement.innerHTML = 'Click me and check the console';

    btnElement.onclick = printer;
    return btnElement;
}

document.body.appendChild(component());