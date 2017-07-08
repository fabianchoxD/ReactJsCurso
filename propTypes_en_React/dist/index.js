'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',

    // Definimos los propTypes como una propiedad estática
    value: function render() {
      return React.createElement(
        'h1',
        null,
        this.props.title.toUpperCase()
      );
    }

    //Propiedad por defecto

  }]);

  return Title;
}(React.Component);

Title.propTypes = {
  // Definimos el tipo de title
  title: React.PropTypes.string.isRequired
};
Title.defaultProps = {
  title: 'Hola - Soy una Propiedad por defecto'
};

var Title2 = function (_React$Component2) {
  _inherits(Title2, _React$Component2);

  function Title2() {
    _classCallCheck(this, Title2);

    return _possibleConstructorReturn(this, (Title2.__proto__ || Object.getPrototypeOf(Title2)).apply(this, arguments));
  }

  _createClass(Title2, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        this.props.title.toUpperCase()
      );
    }
  }], [{
    key: 'propTypes',

    // Definimos los propTypes como una propiedad estática
    get: function get() {
      return {
        // Definimos el tipo de title
        title: React.PropTypes.string.isRequired
      };
    }
  }]);

  return Title2;
}(React.Component);

var Title3 = function (_React$Component3) {
  _inherits(Title3, _React$Component3);

  function Title3() {
    _classCallCheck(this, Title3);

    return _possibleConstructorReturn(this, (Title3.__proto__ || Object.getPrototypeOf(Title3)).apply(this, arguments));
  }

  _createClass(Title3, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        { className: this.props.className },
        this.props.title.toUpperCase()
      );
    }
  }]);

  return Title3;
}(React.Component);

// Definimos los propTypes en el prototipo


Title3.propTypes = {
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.string

  // Igual para los componentes definidos en funciones
};var RedText = function RedText(props) {
  return React.createElement(
    'p',
    { style: { color: 'red' } },
    props.text
  );
};

RedText.propTypes = {
  text: React.PropTypes.string.isRequired

  // Un ejemplo más complejo con array de objetos
};var SumList = function SumList(props) {
  var sum = 0;
  props.numbers.forEach(function (n) {
    return sum += n.number;
  });
  return React.createElement(
    'p',
    null,
    'La suma es igual a: ',
    sum
  );
};

SumList.propTypes = {
  numbers: React.PropTypes.arrayOf(React.PropTypes.shape({
    number: React.PropTypes.number.isRequired
  })).isRequired

  // Instanciamos todos los ejemplos!
};var numbers = [{ number: 10 }, { number: 20 }, { number: 30 }];

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Title, null),
  React.createElement(Title2, { title: 'Title2' }),
  React.createElement(Title3, { title: 'Title3' }),
  React.createElement(RedText, { text: 'Red text' }),
  React.createElement(SumList, { numbers: numbers })
), document.getElementById('app'));