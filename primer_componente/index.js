// Nuestro primer componente
const firstComponent = <h1>React rocks!</h1>;

// También podemos definir los componentes como una función
const secondComponent = () => <h2>React rocks!</h2>;

// O como una clase
class ThirdComponent extends React.Component {
  // Renderizamos un título
  render() {
    return <h3>React Rocks!</h3>;
  }
}

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  <div>
    { firstComponent }
    { secondComponent() }
    <ThirdComponent />
  </div>,
  document.getElementById('app')
);