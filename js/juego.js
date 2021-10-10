const inicia = () => {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  canvas.width = canvasX;
  canvas.height = canvasY;

  casillaX = Math.floor(canvasX / filas);
  casillaY = Math.floor(canvasY / columnas);

  tablero = cuadrado(filas, columnas);

  inicializaTablero(tablero, false);

  setInterval(() => {
    principal();
  }, 1000 / fps);
};
