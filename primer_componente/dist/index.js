'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Nuestro primer componente
var firstComponent = React.createElement(
  'h1',
  null,
  'React rocks!'
);

// También podemos definir los componentes como una función
var secondComponent = function secondComponent() {
  return React.createElement(
    'h2',
    null,
    'React rocks!'
  );
};

// O como una clase

var ThirdComponent = function (_React$Component) {
  _inherits(ThirdComponent, _React$Component);

  function ThirdComponent() {
    _classCallCheck(this, ThirdComponent);

    return _possibleConstructorReturn(this, (ThirdComponent.__proto__ || Object.getPrototypeOf(ThirdComponent)).apply(this, arguments));
  }

  _createClass(ThirdComponent, [{
    key: 'render',

    // Renderizamos un título
    value: function render() {
      return React.createElement(
        'h3',
        null,
        'React Rocks!'
      );
    }
  }]);

  return ThirdComponent;
}(React.Component);

// "Montamos" todos nuestros componentes en el DOM


ReactDOM.render(React.createElement(
  'div',
  null,
  firstComponent,
  secondComponent(),
  React.createElement(ThirdComponent, null)
), document.getElementById('app'));