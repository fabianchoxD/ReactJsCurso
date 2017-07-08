//Se encarga de la conversión de unidades
class InchConverter {
	//Base de la conversión
	static BASE =  2.54;

	//Toma el valor en Cm y lo pasa a Inch
	static convertCmToInch = value => {
		return value / InchConverter.BASE;
	}

	//Toma el valor en Inch y lo pasa a Cm
	static convertInchToCm = value => {
		return InchConverter.BASE * value;
	}
}

//Se Exporta la clase

export default InchConverter;