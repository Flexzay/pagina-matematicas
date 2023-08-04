document.addEventListener("DOMContentLoaded", function () {
  const figuraSelect = document.getElementById("figura");
  const inputContainer = document.getElementById("inputContainer");
  const calcularBtn = document.getElementById("calcularBtn");
  const resultado = document.getElementById("resultado");
  const resultadoPerimetro = document.getElementById("resultadoPerimetro");

  function showInputFields() {
    inputContainer.innerHTML = "";
    const figura = figuraSelect.value;
    let inputFieldsHTML = "";

    switch (figura) {
      case "circulo":
        inputFieldsHTML = `
          <label for="radio">Radio:</label>
          <input type="number" id="radio" step="0.01" required>
        `;
        break;

      case "triangulo":
        inputFieldsHTML = `
          <label for="lado1">Lado 1:</label>
          <input type="number" id="lado1" step="0.01" required>
          <label for="lado2">Lado 2:</label>
          <input type="number" id="lado2" step="0.01" required>
          <label for="lado3">Lado 3:</label>
          <input type="number" id="lado3" step="0.01" required>
        `;
        break;

      case "cuadrado":
        inputFieldsHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" step="0.01" required>
        `;
        break;

      case "rectangulo":
        inputFieldsHTML = `
          <label for="base">Base:</label>
          <input type="number" id="base" step="0.01" required>
          <label for="altura">Altura:</label>
          <input type="number" id="altura" step="0.01" required>
        `;
        break;

      case "pentagono":
        inputFieldsHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" step="0.01" required>
        `;
        break;

      case "hexagono":
        inputFieldsHTML = `
          <label for="lado">Lado:</label>
          <input type="number" id="lado" step="0.01" required>
        `;
        break;
    }

    inputContainer.innerHTML = inputFieldsHTML;
    inputContainer.style.display = "block";
  }

  figuraSelect.addEventListener("change", showInputFields);

  function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
  }

  function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
  }

  function calcularAreaTriangulo(lado1, lado2, lado3) {
    const s = (lado1 + lado2 + lado3) / 2;
    return Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
  }

  function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }

  function calcularAreaCuadrado(lado) {
    return lado * lado;
  }

  function calcularPerimetroCuadrado(lado) {
    return 4 * lado;
  }

  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }

  function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
  }

  function calcularAreaPentagono(lado) {
    const apotema = lado / (2 * Math.tan(Math.PI / 5));
    return (5 * lado * apotema) / 2;
  }

  function calcularPerimetroPentagono(lado) {
    return 5 * lado;
  }

  function calcularAreaHexagono(lado) {
    const apotema = lado / 2;
    return 6 * lado * apotema;
  }

  function calcularPerimetroHexagono(lado) {
    return 6 * lado;
  }

  calcularBtn.addEventListener("click", function () {
    const figura = figuraSelect.value;
    let area = 0;
    let perimetro = 0;

    switch (figura) {
      case "circulo":
        const radio = parseFloat(document.getElementById("radio").value);
        area = calcularAreaCirculo(radio);
        perimetro = calcularPerimetroCirculo(radio);
        break;

      case "triangulo":
        const lado1 = parseFloat(document.getElementById("lado1").value);
        const lado2 = parseFloat(document.getElementById("lado2").value);
        const lado3 = parseFloat(document.getElementById("lado3").value);
        area = calcularAreaTriangulo(lado1, lado2, lado3);
        perimetro = calcularPerimetroTriangulo(lado1, lado2, lado3);
        break;

      case "cuadrado":
        const ladoCuadrado = parseFloat(document.getElementById("lado").value);
        area = calcularAreaCuadrado(ladoCuadrado);
        perimetro = calcularPerimetroCuadrado(ladoCuadrado);
        break;

      case "rectangulo":
        const baseRectangulo = parseFloat(
          document.getElementById("base").value
        );
        const alturaRectangulo = parseFloat(
          document.getElementById("altura").value
        );
        area = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);
        perimetro = calcularPerimetroRectangulo(
          baseRectangulo,
          alturaRectangulo
        );
        break;

      case "pentagono":
        const ladoPentagono = parseFloat(document.getElementById("lado").value);
        area = calcularAreaPentagono(ladoPentagono);
        perimetro = calcularPerimetroPentagono(ladoPentagono);
        break;

      case "hexagono":
        const ladoHexagono = parseFloat(document.getElementById("lado").value);
        area = calcularAreaHexagono(ladoHexagono);
        perimetro = calcularPerimetroHexagono(ladoHexagono);
        break;
    }

    resultado.textContent = `El área del ${figura} es: ${area.toFixed(2)}`;
    resultadoPerimetro.textContent = `El perímetro del ${figura} es: ${perimetro.toFixed(
      2
    )}`;
  });
});
