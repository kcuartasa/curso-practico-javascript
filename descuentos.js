function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

const verificationCupon = function () {
    const cupons = [0, 5, 10, 15, 20];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else if (valueCupon === cupons[3]) {
        return cupons[3];
    } else if (valueCupon === cupons[4]) {
        return cupons[4];
    } else {
        return 0
    }
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = parseInt(inputPrice.value);
    const discountValue = parseInt(inputDiscount.value);
    const selectCoupon = document.getElementById("cupons");
    const cuponsValue = parseInt(selectCoupon.value);
    const discountFinal = parseInt(discountValue) + parseInt(cuponsValue);

   
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountFinal);
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `El precio sin descuento es de $${priceValue}, a este precio se le aplico un descuento del ${discountFinal}%.
    Debido a esto se obtuvo un precio con descuento de $${precioConDescuento}`;
}

