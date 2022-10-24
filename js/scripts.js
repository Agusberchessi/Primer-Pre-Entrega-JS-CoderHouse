const productos = [
    {nombre: "harina" , precio: 50},
    {nombre:"galletas", precio:30},
    {nombre:"cerveza", precio:40},
];

let carrito = []

let seleccion = prompt ('Hola! Desea comprar algun proucto? \n Si \n No')

while (seleccion != 'si' && seleccion !='no') {
    alert('Por favor ingresa si o no')
    seleccion = prompt('Hola! Desea comprar algun proucto?')
    
}

if (seleccion == "si") {
    alert('A continuacion nuestra lista de productos:')
    let todosLosProductos= productos.map(
        (producto)=> producto.nombre + " " + "$"+producto.precio );
    alert(todosLosProductos.join("\n"));
} else if (seleccion=="no") {
    alert('Gracias por ingresar a nuestro sitio! Esperamos volver a verte pronto.')
}

while(seleccion != "no"){

    let producto = prompt("Agregá un producto a tu carrito de compras");
    let precio=0;

    if (producto == "harina" || producto=="galletas" || producto=="cerveza") {
        switch (producto) {
            case "harina":
                precio=50;
                break;
            case "galletas":
                precio=30;
                break;
            case "cerveza":
                precio=40;
                break;        
            default:
                break;
        }
        let unidades= parseInt(prompt('Cuántas unidades del producto quiere llevar?'));

        carrito.push({unidades, producto, precio});
        console.log(carrito);

    }else{
        alert('No tenemos ese producto en stock. Consulta nuevamente mas tarde.')
    }

    seleccion= prompt ('Desea seguir comprando?');

    while(seleccion=="no"){
        alert('Gracias por tu compra! Adiós.');
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto: ${carritoFinal.unidades* carritoFinal.precio}`)
        })
        break;
    }
}

const total= carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0);
console.log(`El total a pagar es: ${total}`)

// acc : acumulador . "0" es el valor inicial de mi acumulador