let competidores = [
  { nombre: "MC Alpha", puntos: 9 },
  { nombre: "FlowMaster", puntos: 6 },
  { nombre: "RimaFina", puntos: 3 },
];

const tablaBody = document.getElementById("tabla-body");
const agregarBtn = document.getElementById("agregarBtn");
const nombreMC = document.getElementById("nombreMC");

function renderTabla() {
  tablaBody.innerHTML = "";
  competidores
    .sort((a, b) => b.puntos - a.puntos)
    .forEach((mc, i) => {
      const fila = document.createElement("div");
      fila.classList.add("fila");
      fila.innerHTML = `
        <span>${i + 1}</span>
        <span>${mc.nombre}</span>
        <span>${mc.puntos}</span>
        <span class="acciones">
          <button onclick="sumarPuntos(${i})">+1</button>
          <button onclick="restarPuntos(${i})">-1</button>
          <button class="eliminar" onclick="eliminarMC(${i})">🗑️</button>
        </span>
      `;
      tablaBody.appendChild(fila);
    });
}

function sumarPuntos(i) {
  competidores[i].puntos++;
  renderTabla();
}

function restarPuntos(i) {
  if (competidores[i].puntos > 0) {
    competidores[i].puntos--;
    renderTabla();
  }
}

function eliminarMC(i) {
  if (confirm(`¿Seguro que quieres eliminar a ${competidores[i].nombre}?`)) {
    competidores.splice(i, 1);
    renderTabla();
  }
}

agregarBtn.addEventListener("click", () => {
  const nombre = nombreMC.value.trim();
  if (nombre) {
    competidores.push({ nombre, puntos: 0 });
    nombreMC.value = "";
    renderTabla();
  }
});

renderTabla();

