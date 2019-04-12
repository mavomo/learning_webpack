import _ from 'lodash';
import printer from './printer/print'

const component = () => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const clickableBtn = createAClickableButton();

    element.appendChild(clickableBtn);
    return element;
};

function createAClickableButton() {
    var btnElement = document.createElement('button');
    btnElement.innerHTML = 'Click me and check the console';

    btnElement.onclick = printer;
    return btnElement;
}

document.body.appendChild(component());