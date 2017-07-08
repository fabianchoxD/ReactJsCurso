'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Contador
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  // Inicializamos nuestro estado
  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
    // ESTA LINEA SIEMPRE DEBE DE SER LA PRIMERA EN EL
    // CONSTRUCTOR


    _this.onClick = _this.onClick.bind(_this);

    // Inicializamos el estado. Aquí creamos el objeto
    // directamente.
    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'onClick',
    value: function onClick() {
      // Actualizamos el valor del contador
      this.setState({ counter: this.state.counter + 1 });
    }
  }, {
    key: 'render',


    // Renderizamos el componente
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Counter'
        ),
        React.createElement(
          'p',
          null,
          'Current value: ',
          React.createElement(
            'b',
            null,
            this.state.counter
          )
        ),
        React.createElement(
          'button',
          { onClick: this.onClick },
          'Increase'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

// "Montamos" todos nuestros componentes en el DOM


ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));