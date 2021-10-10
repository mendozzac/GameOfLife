const canvas = document.getElementById("tablero");
const contexto = canvas.getContext("2d");

const canvasX = 500;
const canvasY = 500;
const filas = 100;
const columnas = 100;
const casillaX = Math.floor(canvasX / filas);
const casillaY = Math.floor(canvasY / columnas);

const cuadrado = () => {
  const objetoBase = new Array(filas);
  for (let i = 0; i < filas; i++) {
    objetoBase[i] = new Array(columnas);
  }
  return objetoBase;
};
const tablero = cuadrado();
const borrarCanvas = () => {
  canvas.width = canvasX;
  canvas.height = canvasY;
};

class Celulas {
  constructor(x, y, estado) {
    this.x = x;
    this.y = y;
    this.estadoProximo = estado;
    this.vecinos = [];
    this.añadirVecinos = () => {
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
    this.pintar = () => {
      let color;
      if (this.estado === 1) {
        color = "#fff;";
      } else {
        color = "#000";
      }
      contexto.fillStyle = color;
      contexto.fillRect(
        this.x * casillaX,
        this.y * casillaY,
        casillaX,
        casillaY
      );
    };
    this.siguienteTurno = () => {
      let suma = 0;
      for (let i = 0; i < this.vecinos.length; i++) {
        suma += this.vecinos[i].estado;
      }
      this.estadoProximo = this.estado;
      if (suma < 2 || suma > 3) {
        this.estadoProximo = 0;
      }
      if (suma === 3) {
        this.estadoProximo = 1;
      }
    };
    this.mutacion = () => {
      this.estado = this.estadoProximo;
    };
  }
}
const inicializaTablero = (obj, aleatorio) => {
  let estado;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (aleatorio === true) {
        estado = Math.floor(Math.random() * 2);
      } else {
        estado = 0;
      }
      obj[i][j] = new Celulas(i, j, estado);
    }
  }
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      obj[i][j].añadirVecinos();
    }
  }
};
const pintaTablero = (obj) => {
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      obj[i][j].pintar();
    }
  }
};

inicializaTablero(tablero);
const empezar = () => {
  borrarCanvas();
  pintaTablero(tablero);
};
empezar();
