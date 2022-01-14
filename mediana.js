// const lista1 = [
//     400,
//     200,
//     500,
//     400000,
//     100,
//     600,
// ];

// lista1.sort(function(a, b) {
//   return a - b;
// });

// const mitadLista1 = parseInt(lista1.length / 2);


// function esPar(numero){
//     if (numero % 2 ===0){
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if(esPar(lista1.length)){
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);

//     mediana = promedioElemento1y2;
// } else {
//     mediana = lista1[mitadLista1];
// }

// Promedio
function mediaAritmetica (array) {
    const sumArray = array.reduce((valorActual, valorAgregado) => valorActual + valorAgregado);
    return sumArray / array.length;
};

// Mediana
function mediana (array) {
    const sortedArray = array.sort((a, b) => a - b);
    const middleList = sortedArray.length / 2;
    
    if (array.length % 2 === 0) {
        const middleLeft = sortedArray[middleList - 1];
        const middleRight = sortedArray[middleList];
        return mediaAritmetica([middleLeft, middleRight]);
    } else {
        return sortedArray[Math.floor(middleList)];
    }
};