'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentComponent = function (_React$Component) {
  _inherits(ParentComponent, _React$Component);

  // Inicializamos el estado
  function ParentComponent(props) {
    _classCallCheck(this, ParentComponent);

    // Binds
    var _this = _possibleConstructorReturn(this, (ParentComponent.__proto__ || Object.getPrototypeOf(ParentComponent)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    _this.state = {
      counter: 0
    };
    return _this;
  }

  // Este método se envía al hijo para que lo ejecute cuando el usuario 
  // haga click en el botón


  _createClass(ParentComponent, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({ counter: this.state.counter + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Number of clicks: ',
          React.createElement(
            'b',
            null,
            this.state.counter
          )
        ),
        React.createElement(ChildComponent, { onClick: this.onClick })
      );
    }
  }]);

  return ParentComponent;
}(React.Component);

// La clase hijo no almacena estado, por lo que podemos definirla como un
// componente stateless


var ChildComponent = function ChildComponent(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    '+ 1'
  );
};

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(React.createElement(ParentComponent, null), document.getElementById('app'));