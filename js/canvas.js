const canvas = document.getElementById("tablero");
const contexto = canvas.getContext("2d");

const canvasX = 500;
const canvasY = 500;
const filas = 100;
const columnas = 100;

canvas.width = canvasX;
canvas.height = canvasY;

const celulas = function (x, y, estado) {
  this.x = x;
  this.y = y;
  this.estadoProximo = estado;

  this.añadirVecinos = function () {
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        const vecinoX = (this.x + j + columnas) % columnas;
        const vecinoY = (this.y + i + filas) % filas;
      }
    }
  };
};
