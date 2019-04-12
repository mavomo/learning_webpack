import _ from 'lodash';
import './style.css'
import Icon from './icon.png';

const component = () => {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var icon = new Image();
    icon.src = Icon;
    element.appendChild(icon);

    return element;
};

document.body.appendChild(component());