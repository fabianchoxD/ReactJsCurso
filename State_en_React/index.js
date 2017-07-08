// Contador
class Counter extends React.Component {
  // Inicializamos nuestro estado
  constructor(props) {
    // ESTA LINEA SIEMPRE DEBE DE SER LA PRIMERA EN EL
    // CONSTRUCTOR
    super(props);
    
    this.onClick = this.onClick.bind(this);
    
    // Inicializamos el estado. Aquí creamos el objeto
    // directamente.
    this.state = {
      counter: 0
    }
  }
  
  onClick() {
    // Actualizamos el valor del contador
    this.setState({ counter: this.state.counter + 1 })
  };
  
  // Renderizamos el componente
  render() {
    return <div>
      <h2>Counter</h2>
      <p>Current value: <b>{ this.state.counter }</b></p>
      <button onClick={ this.onClick }>Increase</button>
    </div>;
  }
}

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);