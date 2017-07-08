'use strict';

var car = {
  name: 'coche',
  attribute: 'rojo'
};

var buildString = function buildString(obj) {
  return 'Mi ' + obj.name + ' es ' + obj.attribute;
};

var element = React.createElement(
  'p',
  null,
  'Object: ',
  car.name,
  ' => ',
  buildString(car),
  '.'
);

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(element, document.getElementById('app'));