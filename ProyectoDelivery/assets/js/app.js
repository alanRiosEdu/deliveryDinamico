const plato = {
    nombre_producto: "Salchipapa",
    descripcion: "¡Deliciosa salchipapa con todos los ingredientes frescos!",
    img: "https://sazondemama.com/wp-content/uploads/2023/09/Como-hacer-la-receta-original-de-salchipapas.jpg"
};

const crearTarjeta = (producto) => {
    // Aquí se genera la info del card
    let tarjetaPlato = `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${producto.img}" alt="${producto.nombre_producto}" style="width: 75px; height: 75px;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre_producto}</h5>
                <p class="card-text">${producto.descripcion}</p>
            </div>
        </div>
    </div>`;

    // Crear un elemento de columna
    let columnaTarjeta = document.createElement("div");
    columnaTarjeta.className = "col";

    // Agregar la tarjeta al elemento de columna
    columnaTarjeta.innerHTML = tarjetaPlato;

    // Agregar la columna al contenedor de productos nuevos
    document.querySelector("#new-product").append(columnaTarjeta);
};

const modificarUsuario = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.querySelector("#nombre_producto").value;
    const img = document.querySelector("#imagen_producto").value;
    const descripcion = document.querySelector("#descripcion_producto").value;

    // Actualizar los valores del producto
    plato.nombre_producto = nombre;
    plato.img = img;
    plato.descripcion = descripcion;

    // Crear la nueva tarjeta con los datos actualizados
    crearTarjeta(plato);

    // Limpiar el formulario
    document.getElementById("formulario").reset();
};

// Agregar evento al formulario para modificar el usuario
document.getElementById("formulario").addEventListener("submit", modificarUsuario);

// Crear la tarjeta inicialmente con los datos de plato
crearTarjeta(plato);
