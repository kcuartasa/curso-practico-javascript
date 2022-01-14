function calcularPromedio(lista) {
//   let sumaLista = 0;

//   for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
//   }

    const sumaLista = lista.reduce(
        function(valorActual = 0, valorAgregado){
            return valorActual + valorAgregado;
        }
    );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}
