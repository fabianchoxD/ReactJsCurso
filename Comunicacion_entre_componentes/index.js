class ParentComponent extends React.Component {
  // Inicializamos el estado
  constructor(props) {
    super(props);
    
    // Binds
    this.onClick = this.onClick.bind(this);

    this.state = {
      counter: 0
    }
  }

  // Este método se envía al hijo para que lo ejecute cuando el usuario 
  // haga click en el botón
  onClick() {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return <div>
      <p>Number of clicks: <b>{ this.state.counter }</b></p>
      <ChildComponent onClick={ this.onClick } />
    </div>;
  }
}

// La clase hijo no almacena estado, por lo que podemos definirla como un
// componente stateless
const ChildComponent = props => <button onClick={ props.onClick }>+ 1</button>;

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  <ParentComponent />,
  document.getElementById('app')
);