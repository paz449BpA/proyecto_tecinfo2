const tips = [
  "Evita reciclar papel que haya estado en contacto con comida.",
  "No mezcles papel con plástico o cartón mojado.",
  "El papel muy brillante o plastificado no siempre es reciclable.",
  "Dobla el papel para ahorrar espacio, ¡pero no lo arrugues demasiado!",
  "Limpia los sobres de papel antes de reciclarlos, especialmente si tienen ventanas plásticas."
];

function mostrarTips() {
  const index = Math.floor(Math.random() * tips.length);
  document.getElementById("tipResultado").textContent = tips[index];
}
