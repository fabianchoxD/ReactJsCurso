// Una clase que representa un título
class Title extends React.Component {
  render() {
    return <h1>{ this.props.title }</h1>;
  }
}

// Componente para representar una alerta.
const Alert = props => <div className={ `Alert Alert--${props.type}` }>{ props.text }</div>;

// "Montamos" todos nuestros componentes en el DOM
// Podeis probar a cambiar el tipo de Alert por info o success
ReactDOM.render(
  <div>
    <Title title="Trabajando con Props" />
    <Alert type="error" text="El usuario no existe" />
  </div>,
  document.getElementById('app')
);