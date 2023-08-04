document.addEventListener("DOMContentLoaded", function () {
  const convertirBtn = document.getElementById("convertirBtn");
  const resultado = document.getElementById("resultado");

  const unidades = {
    metros: 1,
    kilometros: 1000,
    centimetros: 0.01,
    milimetros: 0.001,
    pulgadas: 0.0254,
    pies: 0.3048,
    millas: 1609.34,
    yardas: 0.9144,
  };

  convertirBtn.addEventListener("click", function () {
    const unidadInicial = document.getElementById("unidadInicial").value;
    const valorInicial = parseFloat(
      document.getElementById("valorInicial").value
    );
    const unidadFinal = document.getElementById("unidadFinal").value;
    let valorFinal = 0;

    if (unidadInicial === unidadFinal) {
      valorFinal = valorInicial;
    } else {
      valorFinal =
        (valorInicial * unidades[unidadInicial]) / unidades[unidadFinal];
    }

    resultado.textContent = `El resultado es: ${valorFinal.toFixed(
      2
    )} ${unidadFinal}`;
  });
});
