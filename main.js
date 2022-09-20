// se crean las variables con los diferentes estilos de productos 

const productos = [
    {
        id: 1,
        nombre: 'natural',
        precio: 1200
    },
    {
        id: 2,
        nombre: 'descafeinado',
        precio: 1750
    },
    {
        id: 3,
        nombre: 'intenso',
        precio: 1560
    },
    {
        id: 4,
        nombre: 'arabica',
        precio: 2100
    },
    {
        id: 5,
        nombre: 'moka',
        precio: 2500
    },
]

// se realiza un callback ID para llamar desde HTML un contenedor modificarlo y agregar productos
const conteinerP = document.getElementById("conteiner2");

// se realiza un bucle para realizar una tabla con los productos de los arrays selecionados y mostrarlos por pantalla.

for (const producto of productos){
    let column = document.createElement("div");
    column.className ="col-md-3 mt-5 ms-5";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
    <div class="card">
          <div class="card-body">
          <p class="card-text btn btn-primary">Item: <b>${producto.id}</b></p>
          <p class="card-text text-danger">Nombre Producto: <b class="text-uppercase">${producto.nombre}</b></p>
          <p class="card-text btn btn-success">Precio venta: <b>${producto.precio}</b></p>
          </div>
      </div>`;

      conteinerP.append(column);
}
