function Temperatura(valor, tipo) { // Clase para la creación de medidas de temperaturas. Herencia de Medida.

  Medida.call(this, valor, tipo); // Herencia de la clase Medida.
}

Temperatura.prototype = new Medida(); // Necesario para realizar la herencia.
Temperatura.prototype.constructor = Temperatura;

function Celsius(valor) { // Clase para la creación de medidas Celsius. Herencia de Temperatura.

  Temperatura.call(this, valor); // Herencia de la clase Temperatura.
}

Celsius.prototype = new Temperatura(); // Necesario para realizar la herencia.
Celsius.prototype.constructor = Celsius;

Celsius.prototype.toFahrenheit = function () {
  var result = (this.valor * 9/5)+32;
  return result;
}

Celsius.prototype.toKelvin = function () {
  var result = this.valor + 273.15;
  return result;
}

function Fahrenheit(valor) { // Clase para la creación de medidas Fahrenheit. Herencia de Temperatura.

  Temperatura.call(this, valor); // Herencia de la clase Temperatura.
}

Fahrenheit.prototype = new Temperatura(); // Necesario para realizar la herencia.
Fahrenheit.prototype.constructor = Fahrenheit;

Fahrenheit.prototype.toCelsius = function () {
  var result = (this.valor - 32) * 5/9;
  return result;
}

Fahrenheit.prototype.toKelvin = function () {
  var result = ((this.valor - 32) / (9/5)) + 273.15;
  return result;
}

function Kelvin(valor) { // Clase para la creación de medidas Kelvin. Herencia de Temperatura.

  Temperatura.call(this, valor); // Herencia de la clase Temperatura.
}

Kelvin.prototype = new Temperatura(); // Necesario para realizar la herencia.
Kelvin.prototype.constructor = Kelvin;

Kelvin.prototype.toCelsius = function () {
  var result = this.valor - 273.15;
  return result;
}

Kelvin.prototype.toFahrenheit = function () {
  var result = ((this.valor - 273.15) * 9/5) + 32;
  return result;
}
