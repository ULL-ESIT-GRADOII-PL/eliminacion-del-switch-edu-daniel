function Medida (valor,tipo)
{
    var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*([a-zA-Z])\s*$/i;
    var val = regexp.exec(valor);
    if (val) {
      this.valor = val[1];
      this.tipo = val[2];
    } else {
      this.valor = valor;
      this.tipo = tipo;
    }
}
Medida.match = function (valor) {

  var temperaturas = "(([fF](?:[aA](?:[hH](?:[rR](?:[eE](?:[nN](?:[hH](?:[eE](?:[iI](?:[tT])?)?)?)?)?)?)?)?)?)" +
                     "|([cC](?:[eE](?:[lL](?:[sS](?:[iI](?:[uU](?:[sS])?)?)?)?)?)?)" +
                     "|([kK](?:[eE](?:[lL](?:[vV](?:[iI](?:[nN])?)?)?)?)?))";

  var cadena = XRegExp('^(\\s*)                                            # espacios \n' +
                       '(?<medida> [+-]?\\d+(\\.\\d+)?([e][+-]?\\d+)?[ ]*) # medida a tomar \n' +
                       '(?<from> ' + temperaturas + ')                    # Medida de partida \n' +
                       '(?<to>[ ]+(?:to[ ]+)?)                             # to \n' +
                       '(?<to_o> ' + temperaturas + ')                    # Medida de llegada \n' +
                       '(\\s*)$                                            # espacios en blanco \n'
                     , 'xi');

  valor = XRegExp.exec(valor, cadena);
  return valor;
}

Medida.measures = {};

Medida.convertir = function(valor) {
  var measures = Medida.measures;

  measures.c  = Celsius;
  measures.f = Fahrenheit;
  measures.k = Kelvin;

  var match = Medida.match(valor);
  if (match) {
    var numero = match.medida,
        tipo_from = match.from.toLowerCase(),
        tipo_to = match.to_o.toLowerCase();

        numero = parseFloat(numero);
        console.log("Valor: " + numero + ", 1º Tipo: " + tipo_from + ", 2º Tipo: " + tipo_to);

    
        try {
          var source = new measures[tipo_from](numero);                  // new Fahrenheit(32)
          var target = "to"+measures[tipo_to].name;                 // "toCelsius"
          return source[target]().toFixed(2) + " "+measures[tipo_to].name;          // "0 Celsius"
        }
        catch(err) {
          console.log(err);
          return 'Desconozco como convertir desde "'+tipo_from+'" hasta "'+destino_to+'"';
        }
      }
      else
        return "Introduzca una temperatura valida: 330e-1 F to C";
    };
