let car = {
  name: 'coche',
  attribute: 'rojo'
}

const buildString = obj => `Mi ${obj.name} es ${obj.attribute}`;

const element = <p>
  Object: { car.name } => { buildString(car) }.
</p>;

// "Montamos" todos nuestros componentes en el DOM
ReactDOM.render(
  element,
  document.getElementById('app')
);