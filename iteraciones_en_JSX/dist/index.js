'use strict';

var TransportList = function TransportList() {
  // Estos son los elementos que vamos a dibujar en la interfaz
  var elements = ['Peras', 'Guayabas', 'Piñas'];

  return React.createElement(
    'ul',
    null,
    elements.map(function (element) {
      return React.createElement(
        'li',
        { key: element },
        element
      );
    })
  );
};

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(TransportList, null)
), document.getElementById('app'));