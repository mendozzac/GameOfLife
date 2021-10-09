function cuadrado(filas, columnas) {
  const objetoBase = new Array(filas);
  for (i = 0; i < filas; i++) {
    objetoBase[i] = new Array(columnas);
  }
  return objetoBase;
}
