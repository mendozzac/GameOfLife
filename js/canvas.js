const canvas = document.getElementById("tablero");
const contexto = canvas.getContext("2d");

const canvasX = 500;
const canvasY = 500;
const filas = 100;
const columnas = 100;
const casillaX = Math.floor(canvasX / filas);
const casillaY = Math.floor(canvasY / columnas);
const tablero = cuadrado();

function cuadrado(filas, columnas) {
  const objetoBase = new Array(filas);
  for (let i = 0; i < filas; i++) {
    objetoBase[i] = new Array(columnas);
  }
  return objetoBase;
}

canvas.width = canvasX;
canvas.height = canvasY;

const celulas = function (x, y, estado) {
  this.x = x;
  this.y = y;
  this.estadoProximo = estado;
  this.vecinos = [];

  this.añadirVecinos = function () {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const vecinoX = (this.x + j + columnas) % columnas;
        const vecinoY = (this.y + i + filas) % filas;

        if (i !== 0 || j !== 0) {
          this.vecinos.push(tablero[vecinoY][vecinoX]);
        }
      }
    }
  };
};
