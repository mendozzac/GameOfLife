const canvasX = 500;
const canvasY = 500;
const filas = 50;
const columnas = 50;
const casillaX = Math.floor(canvasX / filas);
const casillaY = Math.floor(canvasY / columnas);
const fotogramasPorSegundo = 20;

const canvas = document.getElementById("tablero");
const contexto = canvas.getContext("2d");
canvas.width = canvasX;
canvas.height = canvasY;

const cuadrado = () => {
  const objetoBase = new Array(filas);
  for (let i = 0; i < filas; i++) {
    objetoBase[i] = new Array(columnas);
  }
  return objetoBase;
};
const tablero = cuadrado();

const borrarCanvas = () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
};

class Celulas {
  constructor(x, y, estado) {
    this.x = x;
    this.y = y;
    this.estado = estado;
    this.estadoProximo = this.estado;
    this.vecinos = [];
    this.añadirVecinos = () => {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const vecinoX = (this.x + j + columnas) % columnas;
          const vecinoY = (this.y + i + filas) % filas;

          if (i !== 0 || j !== 0) {
            this.vecinos.push(tablero[vecinoX][vecinoY]);
          }
        }
      }
    };
    this.pintar = () => {
      let color;
      if (this.estado === 1) {
        color = "#faebd7";
      } else {
        color = "#10dada";
      }
      contexto.fillStyle = color;
      contexto.fillRect(
        this.x * casillaX,
        this.y * casillaY,
        casillaX,
        casillaY
      );
      contexto.strokeRect(
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
      if (this.estado === 1 && (suma < 2 || suma > 3)) {
        this.estadoProximo = 0;
      }
      if (this.estado === 0 && suma === 3) {
        this.estadoProximo = 1;
      }
    };
    this.mutacion = () => {
      this.estado = this.estadoProximo;
    };
  }
}
const iniciaTablero = (obj) => {
  let estado;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      estado = Math.floor(Math.random() * 2);
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
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      obj[i][j].siguienteTurno();
    }
  }
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      obj[i][j].mutacion();
    }
  }
};

iniciaTablero(tablero);
const empezar = () => {
  borrarCanvas();
  pintaTablero(tablero);
};
setInterval(() => {
  empezar();
}, 1000 / fotogramasPorSegundo);
empezar();
