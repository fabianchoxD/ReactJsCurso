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

    _this.onClick = _this.onClick.bind(_this);

    // Inicializamos el estado. Aquí creamos el objeto
    // directamente.
    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('[CV] componentWillUnmount');
    }
  }, {
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
          this.props.title
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

var CounterParent = function (_React$Component2) {
  _inherits(CounterParent, _React$Component2);

  function CounterParent(props) {
    _classCallCheck(this, CounterParent);

    var _this2 = _possibleConstructorReturn(this, (CounterParent.__proto__ || Object.getPrototypeOf(CounterParent)).call(this, props));

    _this2.onClick = _this2.onClick.bind(_this2);

    _this2.state = { show: true };
    return _this2;
  }

  _createClass(CounterParent, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({ show: !this.state.show });
    }
  }, {
    key: 'renderCounter',
    value: function renderCounter() {
      if (this.state.show) {
        return React.createElement(Counter, { title: 'MyCounter' });
      } else {
        return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.onClick },
          'Mostrar / Ocultar'
        ),
        this.renderCounter()
      );
    }
  }]);

  return CounterParent;
}(React.Component);

// "Montamos" todos nuestros componentes en el DOM


ReactDOM.render(React.createElement(CounterParent, null), document.getElementById('app'));

//===================================================

// Contador

var Counter2 = function (_React$Component3) {
  _inherits(Counter2, _React$Component3);

  // Inicializamos nuestro estado
  function Counter2(props) {
    _classCallCheck(this, Counter2);

    var _this3 = _possibleConstructorReturn(this, (Counter2.__proto__ || Object.getPrototypeOf(Counter2)).call(this, props));

    _this3.onClick = _this3.onClick.bind(_this3);

    // Inicializamos el estado. Aquí creamos el objeto
    // directamente.
    _this3.state = {
      counter: 0
    };
    return _this3;
  }

  _createClass(Counter2, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('[CV] componentWillReceiveProps');
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      console.log('[CV] shouldComponentUpdate');
      return true;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      console.log('[CV] componentWillUpdate');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('[CV] componentDidUpdate');
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      // Actualizamos el valor del contador
      this.setState({ counter: this.state.counter + 1 });
    }
  }, {
    key: 'render',


    // Renderizamos el componente
    value: function render() {
      console.log('[CV] render');

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          this.props.title
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

  return Counter2;
}(React.Component);

var CounterParent2 = function (_React$Component4) {
  _inherits(CounterParent2, _React$Component4);

  function CounterParent2(props) {
    _classCallCheck(this, CounterParent2);

    var _this4 = _possibleConstructorReturn(this, (CounterParent2.__proto__ || Object.getPrototypeOf(CounterParent2)).call(this, props));

    _this4.onClick = _this4.onClick.bind(_this4);

    _this4.state = { title: 'My Counter2' };
    return _this4;
  }

  _createClass(CounterParent2, [{
    key: 'onClick',
    value: function onClick() {
      var title = this.state.title === 'My Counter2' ? 'The Counter2' : 'My Counter2';
      this.setState({ title: title });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.onClick },
          'Actualizar props'
        ),
        React.createElement(Counter, { title: this.state.title })
      );
    }
  }]);

  return CounterParent2;
}(React.Component);

// "Montamos" todos nuestros componentes en el DOM


ReactDOM.render(React.createElement(CounterParent2, null), document.getElementById('app2'));