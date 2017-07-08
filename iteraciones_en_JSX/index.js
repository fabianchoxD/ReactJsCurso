const TransportList = () => {
  // Estos son los elementos que vamos a dibujar en la interfaz
  let elements = ['Peras', 'Guayabas', 'Piñas'];

  return <ul>
    { elements.map(element => <li key={ element }>{ element }</li>) }
  </ul>
}

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  <div>
    <TransportList />
  </div>,
  document.getElementById('app')
);