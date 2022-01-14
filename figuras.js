console.group(`Cuadrados`);

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();

console.group(`Triangulos`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return (base * altura) / 2;
};

console.groupEnd();


console.group(`Circulos`);

function diametroCirculo(radio){
    return radio * 2;
};


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};


function areaCirculo(radio){
    return (radio * radio) * Math.PI;
};

console.groupEnd();


function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado");
   const value = parseInt(input.value);
   const perimetro = perimetroCuadrado(value);
   alert(`El perimetro es de ${perimetro} cm`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`El area es de ${area} cm`);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloLado1");
    const lado2 = document.getElementById("InputTrianguloLado2");
    const base = document.getElementById("InputTrianguloBase");
    const valueLado1 = parseInt(lado1.value);
    const valueLado2 = parseInt(lado2.value);
    const valueBase = parseInt(base.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(`El perimetro es de ${perimetro} cm`);
 }
 
 function calcularAreaTriangulo(){
     const altura = document.getElementById("InputTrianguloAltura");
     const base = document.getElementById("InputTrianguloBase");
     const valueAltura = parseInt(altura.value);
     const valueBase = parseInt(base.value);

     const area = areaTriangulo(valueAltura, valueBase);
     alert(`El area es de ${area} cm`);
 }

 function calcularDiametroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const valueRadio = parseInt(radio.value);

    const diametro = diametroCirculo(valueRadio);
    alert(`El diametro es de ${diametro} cm`);
 }

 function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const valuePerimetro = parseInt(radio.value);

    const perimetro = perimetroCirculo(valuePerimetro);
    alert(`El perimetro es de ${perimetro} cm`);
 }

 function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const valueArea = parseInt(radio.value);

    const area = perimetroCirculo(valueArea);
    alert(`El area es de ${area} cm`);
 }
