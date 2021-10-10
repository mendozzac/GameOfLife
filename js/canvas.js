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
};
