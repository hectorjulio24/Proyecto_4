var numeroA = "0";
var numeroB = 1;
var operacion;
var dec = 0;

window.onload = function calculadora(){ //Acciones tras cargar la página

}
  var display = document.getElementById("display")
  var On = document.getElementById("on");
  var signo = document.getElementById("sign");
  var raiz = document.getElementById("raiz");
  var dividido = document.getElementById("dividido");
  var siete = document.getElementById("7");
  var ocho = document.getElementById("8");
  var nueve = document.getElementById("9");
  var por = document.getElementById("por");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");
  var menos = document.getElementById("menos");
  var uno = document.getElementById("1");
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cero = document.getElementById("0");
  var igual = document.getElementById("igual");
  var mas = document.getElementById("mas");

//eventos click para cada tecla

  nueve.onclick = function(e){
    insertaNumero('9');
  }
  ocho.onclick = function(e){
    insertaNumero('8');
  }
  siete.onclick = function(e){
    insertaNumero('7');
  }
  seis.onclick = function(e){
    insertaNumero('6');
  }
  cinco.onclick = function(e){
    insertaNumero('5');
  }
  cuatro.onclick = function(e){
    insertaNumero('4');
  }
  tres.onclick = function(e){
    insertaNumero('3');
  }
  dos.onclick = function(e){
    insertaNumero('2');
  }
  uno.onclick = function(e){
    insertaNumero('1');
  }
  cero.onclick = function(e){
    insertaNumero('0');
  }
  punto.onclick = function(e){
      coma();
    }
  sign.onclick = function(e){
      signoNegativo();
    }
  on.onclick = function(e){
      borrarPantalla();
    }
  mas.onclick = function(e){
      agregarOperacion("+");
    }
  menos.onclick = function(e){
      agregarOperacion("-");
    }
  por.onclick = function(e){
      agregarOperacion("*");
    }
  dividido.onclick = function(e){
      agregarOperacion("/");
    }
    igual.onclick = function(e){
      resultadoIgual();
    }
  // insertar valor al display
	function insertaNumero(valor) {
		var elemento = document.getElementById('display')

		if (sessionStorage.result == 1) {
			elemento.innerHTML = valor;
			sessionStorage.result = 0
		} else {
    			if (elemento.innerHTML == '0') {
				elemento.innerHTML = valor;
			} else {
				var displayNew = elemento.innerHTML + valor
				var displayOptimo = validarDigitos(displayNew)
				elemento.innerHTML = displayOptimo;
			}
		}
    marcarNumeros();
	}

  // funcion coma para colocar el punto (.)
  function coma()
  {
    var valor = display.textContent;
    if (dec==0)
      {
      if(valor.indexOf('.') == -1)
        display.textContent = display.textContent + ".";
      }
    else
      {
      display.textContent.value = "0.";
      dec=0;
      }
    display.textContent;
  }
  // valida que se muestren 8 numeros en display
  function validarDigitos(valor) {
  		var valor = String(valor);
  		return valor.substring(0, 8);
  	}

    // colocar o quitar el singo menos (-)
      function signoNegativo()
    {
      var valor = display.textContent;
      if(valor.indexOf('-') == 0)
        valor = valor.substring(1);
      else
        valor = '-' + valor;
       display.textContent = valor;

    }

  // borrar la pantalla al presionar on
	 function borrarPantalla() {
		document.getElementById('display').innerHTML = '0';

		sessionStorage.valor = 0;
		sessionStorage.operacion = 0;
		sessionStorage.result = 0;
		sessionStorage.ultimoResultado = 0
		sessionStorage.operacionActiva = 0
		sessionStorage.valorGuardado = 0
		sessionStorage.countOperadorIgual = 0
	}
// realizar operaciones
	 function resultado(numeroA, numeroB, operacion, tipo) {
		switch (operacion) {
			case '+':
				var resultado = (Number(numeroA) + Number(numeroB))
				break;
			case '-':
				var resultado = (Number(numeroA) - Number(numeroB))
				break;
			case '*':
				var resultado = (Number(numeroA) * Number(numeroB))
				break;
			case '/':
				var resultado = (Number(numeroA) / Number(numeroB))
				break;
		}
		resultadoValidado = validarDigitos(resultado);
		sessionStorage.operacionActiva = tipo
		sessionStorage.result = 1
		sessionStorage.ultimoResultado = resultadoValidado
		return resultadoValidado;
	}
  //realizar nueva operacion
	 function agregarOperacion(valor) {

		var elemento = document.getElementById('display')
		var valorDisplay = Number(elemento.innerHTML)
		var valorOperacion = valor

		if (sessionStorage.result == 1) {
			sessionStorage.valor = sessionStorage.ultimoResultado
			sessionStorage.result = 0
		} else {
			if (sessionStorage.operacionActiva == '1') {
				sessionStorage.valor = resultado(sessionStorage.valor, valorDisplay, sessionStorage.operacion, 1)
				sessionStorage.result = 0

			} else {
				sessionStorage.valor = Number(valorDisplay);
			}
		}

		if (valorDisplay != '') {
			sessionStorage.valorGuardado = Number(valorDisplay);
		}

		sessionStorage.countOperadorIgual = 0
		sessionStorage.operacionActiva = 1;
		sessionStorage.operacion = valorOperacion;
		elemento.innerHTML = '';
	}

// funcion igual para que vaya sumando el ultimo valor al presionarla
	 function resultadoIgual() {

		var elemento = document.getElementById('display');
		var valorDisplay = sessionStorage.valor
		var valorOperacion = sessionStorage.operacion
		var valorDisplayNew = elemento.innerHTML

		if (valorDisplayNew == '') {
			valorDisplayNew = sessionStorage.valorGuardado
		} else if (valorDisplayNew != '' && sessionStorage.countOperadorIgual == 0) {
			sessionStorage.valor = valorDisplayNew
			sessionStorage.countOperadorIgual = 1
		}
		elemento.innerHTML = resultado(valorDisplay, valorDisplayNew, valorOperacion, 0)
	}
// disminuir tamaño de las teclas al presionarlas
function marcarNumeros() {
var listaNodosNumeros = document.querySelectorAll("#calculadoraFondo .teclado img.tecla");
       for (var i=0; i<listaNodosNumeros.length; i++) {
                listaNodosNumeros[i].onmousedown = eventoPresionaTecla;
                listaNodosNumeros[i].onmouseup = eventoVuelveTecla;
                }
}
function eventoPresionaTecla(event) {
 presionaTecla(event.target);
}

function eventoVuelveTecla(event) {
 sueltaTecla(event.target);
}

//Formato de botones
function presionaTecla(elemento) {
 var x = elemento.id;
 if (x == "1" || x == "2" || x == "3" || x == "0" || x == "igual" || x == "punto") {
   elemento.style.width = "28%";
   elemento.style.height = "62px";
 } else if (x == "mas") {
   elemento.style.width = "88%";
   elemento.style.height = "98%";
 } else {
   elemento.style.width = "21%";
   elemento.style.height = "62px";
 }
}

function sueltaTecla(elemento) {
 var x = elemento.id;
 if (x == "1" || x == "2" || x == "3" || x == "0" || x == "igual" || x == "punto") {
   elemento.style.width = "29%";
   elemento.style.height = "62.91px";
 } else if (x == "mas") {
   elemento.style.width = "90%";
   elemento.style.height = "100%";
 } else {
   elemento.style.width = "22%";
   elemento.style.height = "62.91px";
 }
}
