let buttonRaiz = document.getElementById("Raiz");
let buttonmaxmin = document.getElementById("maxmin");

function calcular(a, b, c, d, x) {
  let ter1 = a * Math.pow(x, 3);
  let ter2 = b * Math.pow(x, 2);
  let ter3 = c * x;
  let ter4 = d;
  return ter1 + ter2 + ter3 + ter4;
}

function calcularMaxMin(a, b, c, d) {
  let aderiv = 3 * a;
  let bderiv = 2 * b;
  let cderiv = c;

  let discriminante = Math.pow(bderiv, 2) - 4 * aderiv * cderiv;

  let resultado = "";

  if (discriminante > 0) {
    let x1 = (-bderiv + Math.sqrt(discriminante)) / (2 * aderiv);
    let x2 = (-bderiv - Math.sqrt(discriminante)) / (2 * aderiv);

    let y1 = calcular(a, b, c, d, x1);
    let y2 = calcular(a, b, c, d, x2);

    if (y1 > y2) {
      resultado =
        "Maximo de X: " +
        x1.toFixed(2) +
        " | Y: " +
        y1.toFixed(2) +
        "<br>" +
        "Minimo de X: " +
        x2.toFixed(2) +
        " | Y: " +
        y2.toFixed(2);
    } else {
      resultado =
        "Maximo de X: " +
        x2.toFixed(2) +
        " | Y: " +
        y2.toFixed(2) +
        "<br>" +
        "Minimo de X: " +
        x1.toFixed(2) +
        " | Y: " +
        y1.toFixed(2);
    }
  } else {
    resultado = " Este polinomio no tiene maximos y minimos";
  }
  document.getElementById("respuesta").innerHTML = resultado;
}

function capturar(operacion) {
  let a = parseFloat(document.getElementById("coefA").value);
  let b = parseFloat(document.getElementById("coefB").value);
  let c = parseFloat(document.getElementById("coefC").value);
  let d = parseFloat(document.getElementById("coefD").value);
  if (operacion === "maxmin") {
    calcularMaxMin(a, b, c, d);
  } else if (operacion === "raiz") {
    let inicial = parseFloat(document.getElementById("inicial").value);
    let final = parseFloat(document.getElementById("final").value);
    let medio;
    let valorMedio;
    let valorInicial;

    while (Math.abs(final - inicial) > 0.001) {
      medio = (inicial + final) / 2;
      valorMedio = calcular(a, b, c, d, medio);
      valorInicial = calcular(a, b, c, d, inicial);
      if (valorMedio === 0) {
        break;
      }
      if (valorInicial * valorMedio < 0) {
        final = medio;
      } else {
        inicial = medio;
      }
    }
    document.getElementById("respuesta").innerHTML =
      "La raíz aproximada es " + medio.toFixed(2);
  }
}

buttonRaiz.addEventListener("click", function () {
  capturar("raiz");
});
buttonmaxmin.addEventListener("click", function () {
  capturar("maxmin");
});
