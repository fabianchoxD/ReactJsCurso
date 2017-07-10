// Contador
class Counter extends React.Component {
  // Inicializamos nuestro estado
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
    
    // Inicializamos el estado. Aquí creamos el objeto
    // directamente.
    this.state = {
      counter: 0
    }
  }
  
  componentWillUnmount() {
    console.log('[CV] componentWillUnmount');
  }

  onClick() {
    // Actualizamos el valor del contador
    this.setState({ counter: this.state.counter + 1 })
  };
  
  // Renderizamos el componente
  render() {
    return <div>
      <h2>{ this.props.title }</h2>
      <p>Current value: <b>{ this.state.counter }</b></p>
      <button onClick={ this.onClick }>Increase</button>
    </div>;
  }
}

class CounterParent extends React.Component {
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
    
    this.state = { show: true };
  }
  
  onClick() {
    this.setState({ show: !this.state.show });
  }
  
  renderCounter() {
    if (this.state.show) {
      return <Counter title="MyCounter" />;
    } else {
      return null;
    }
  }
  
  render() {
    return <div>
      <button onClick={ this.onClick }>Mostrar / Ocultar</button>
      { this.renderCounter() }
    </div>
  }
}

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  <CounterParent/>,
  document.getElementById('app')
);

//===================================================

// Contador
class Counter2 extends React.Component {
  // Inicializamos nuestro estado
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
    
    // Inicializamos el estado. Aquí creamos el objeto
    // directamente.
    this.state = {
      counter: 0
    }
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('[CV] componentWillReceiveProps');
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[CV] shouldComponentUpdate');
    return true;
  }
  
  componentWillUpdate() {
    console.log('[CV] componentWillUpdate');
  }
  
  componentDidUpdate() {
    console.log('[CV] componentDidUpdate');
  }
  
  onClick() {
    // Actualizamos el valor del contador
    this.setState({ counter: this.state.counter + 1 })
  };
  
  // Renderizamos el componente
  render() {
    console.log('[CV] render');
    
    return <div>
      <h2>{ this.props.title }</h2>
      <p>Current value: <b>{ this.state.counter }</b></p>
      <button onClick={ this.onClick }>Increase</button>
    </div>;
  }
}

class CounterParent2 extends React.Component {
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
    
    this.state = { title: 'My Counter2' };
  }
  
  onClick() {
    let title = this.state.title === 'My Counter2' ? 'The Counter2' : 'My Counter2';
    this.setState({ title });
  }
  
  render() {
    return <div>
      <button onClick={ this.onClick }>Actualizar props</button>
      <Counter title={ this.state.title } />
    </div>
  }
}

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  <CounterParent2/>,
  document.getElementById('app2')
);