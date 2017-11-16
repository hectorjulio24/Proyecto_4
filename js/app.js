var numeroA;
var numeroB;
var operacion;

function init(){
  var display = document.getElementById("display");
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
  var punto = document.getElementById("punto");
  var igual = document.getElementById("igual");
  var mas = document.getElementById("mas");


  uno.addEventListener("click",function(event){
  display.textContent =display.textContent + "1" ;
  })
  dos.addEventListener("click",function(event){
  display.textContent =display.textContent + "2" ;
  })
  tres.addEventListener("click",function(event){
  display.textContent =display.textContent + "3" ;
  })
  cuatro.addEventListener("click",function(event){
  display.textContent =display.textContent + "4" ;
  })
  cinco.addEventListener("click",function(event){
  display.textContent =display.textContent + "5" ;
  })
  seis.addEventListener("click",function(event){
  display.textContent =display.textContent + "6" ;
  })
  siete.addEventListener("click",function(event){
  display.textContent =display.textContent + "7" ;
  })
  ocho.addEventListener("click",function(event){
  display.textContent =display.textContent + "8" ;
  })
  nueve.addEventListener("click",function(event){
  display.textContent =display.textContent + "9" ;
  })
  cero.addEventListener("click",function(event){
  display.textContent =display.textContent + "0" ;
  })

  on.onclick = function(e){
    borrar();
  }
  mas.onclick = function(e){
    numeroA = display.textContent;
    operacion="+";
    borrarPantalla();
  }
  menos.onclick = function(e){
    numeroA = display.textContent;
    operacion="-";
    borrarPantalla();
  }
  por.onclick = function(e){
    numeroA = display.textContent;
    operacion="*";
    borrarPantalla();
  }
  dividido.onclick = function(e){
    numeroA = display.textContent;
    operacion="/";
    borrarPantalla();
  }
  igual.onclick = function(e){
    numeroB = display.textContent;
    resultado();
  }

}

function borrarPantalla(){
  display.textContent = "";
}

function borrar(){
  display.textContent = "";
  numeroA=0;
  numeroB=0;
  operacion="";
}
function resultado(){
  var resolver = 0;
  switch (operacion) {
    case "+":
      resolver = parseFloat(numeroA) + parseFloat(numeroB);
      break;

    case "-":
      resolver = parseFloat(numeroA) - parseFloat(numeroB);
      break;

    case "*":
      resolver = parseFloat(numeroA) * parseFloat(numeroB);
      break;

    case "/":
      resolver = parseFloat(numeroA) / parseFloat(numeroB);
      break;
  }
  borrar();
  display.textContent = resolver;
}
