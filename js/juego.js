class Juego {
  constructor(filas, columnas) {
    const objetoBase = new Array(filas);
    for (let i = 0; i < filas; i++) {
      objetoBase[i] = new Array(columnas);
    }
    return objetoBase;
  }
}
function nuevoCuadrado(objetoBase, aleatorio) {
  let estado;

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (aleatorio === true) estado = Math.floor(Math.random() * 2);
      else estado = 0;

      objetoBase[i][j] = new celula(i, j, estado);
    }
  }
}
console.table(cuadrado());

module.exports = { cuadrado };
