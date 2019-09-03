import _ from 'lodash';
import print from './print';

import './style.css';
// import icon from '../asset/icon.png';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // var iconImg = new Image();
  // iconImg.src = icon;

  // element.append(iconImg);

  btn.innerHTML = 'Click me and check the console22!';
  btn.onclick = print;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());