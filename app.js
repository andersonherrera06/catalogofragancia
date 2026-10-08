// ============================================
// CATÁLOGO DE ESENCIAS
// ============================================


// PRECIOS DE LAS PRESENTACIONES

const presentacionesBase = [
    {
        ml: 30,
        precio: 16000
    },

    {
        ml: 60,
        precio: 24000
    },

    {
        ml: 100,
        precio: 40000
    }
];


// ============================================
// PRODUCTOS
// ============================================

const productos = [

    // =========================
    // DAMA
    // =========================

    {
        id: 1,
        nombre: "BURBERRY",
        categoria: "Dama"
    },

    {
        id: 2,
        nombre: "AMOR AMOR",
        categoria: "Dama"
    },

    {
        id: 3,
        nombre: "TOMMY GIRL",
        categoria: "Dama"
    },

    {
        id: 4,
        nombre: "OLIMPEA",
        categoria: "Dama"
    },

    {
        id: 5,
        nombre: "LA VIDA ES BELLA",
        categoria: "Dama"
    },

    {
        id: 6,
        nombre: "CHANEL N6",
        categoria: "Dama"
    },

    {
        id: 7,
        nombre: "ESCAPE",
        categoria: "Dama"
    },

    {
        id: 8,
        nombre: "FANTASY",
        categoria: "Dama"
    },

    {
        id: 9,
        nombre: "212 VIP",
        categoria: "Dama"
    },

    {
        id: 10,
        nombre: "PARIS HILTON",
        categoria: "Dama"
    },

    {
        id: 11,
        nombre: "LOLITA LEMPIKA",
        categoria: "Dama"
    },

    {
        id: 12,
        nombre: "CLOUD GIRL",
        categoria: "Dama"
    },

    {
        id: 13,
        nombre: "GOOD GIRL",
        categoria: "Dama"
    },

    {
        id: 14,
        nombre: "CAN CAN",
        categoria: "Dama"
    },

    {
        id: 15,
        nombre: "PASPORT PARIS",
        categoria: "Dama"
    },

    {
        id: 16,
        nombre: "AVRI",
        categoria: "Dama"
    },

    {
        id: 17,
        nombre: "KIM KARDASHIAN",
        categoria: "Dama"
    },

    {
        id: 18,
        nombre: "OMNIA CORAL",
        categoria: "Dama"
    },

    {
        id: 19,
        nombre: "BOMBSHELL",
        categoria: "Dama"
    },

    {
        id: 20,
        nombre: "LIGHT BLUE FEM",
        categoria: "Dama"
    },

    {
        id: 21,
        nombre: "AHLI CORVIN",
        categoria: "Dama"
    },

    {
        id: 22,
        nombre: "CAROLINA HERRERA",
        categoria: "Dama"
    },

    {
        id: 23,
        nombre: "DIAMANTES BLANCOS",
        categoria: "Dama"
    },

    {
        id: 24,
        nombre: "LOQUITO POR TI",
        categoria: "Dama"
    },

    {
        id: 25,
        nombre: "YARA LATAFA",
        categoria: "Dama"
    },

    {
        id: 26,
        nombre: "YARA TOUS",
        categoria: "Dama"
    },

    {
        id: 27,
        nombre: "ORIE OUD SAFRON",
        categoria: "Dama"
    },

    {
        id: 28,
        nombre: "BLEEKER STREET",
        categoria: "Dama"
    },

    {
        id: 29,
        nombre: "RALPH LAUREN",
        categoria: "Dama"
    },

    {
        id: 30,
        nombre: "SORBETTO ROSSO",
        categoria: "Dama"
    },

    {
        id: 31,
        nombre: "STARRY NIGHT",
        categoria: "Dama"
    },

    {
        id: 32,
        nombre: "YUM YUM",
        categoria: "Dama"
    },

    {
        id: 33,
        nombre: "AHLI KARPÓS",
        categoria: "Dama"
    },

    {
        id: 34,
        nombre: "OUD SULBIM RED",
        categoria: "Dama"
    },

    {
        id: 35,
        nombre: "9AM DIVA",
        categoria: "Dama"
    },

    {
        id: 36,
        nombre: "AHLI VEGA",
        categoria: "Dama"
    },

    {
        id: 37,
        nombre: "VANILLA FREAK",
        categoria: "Dama"
    },

    {
        id: 38,
        nombre: "BERRY ON TOP",
        categoria: "Dama"
    },


    // =========================
    // HOMBRE
    // =========================

    {
        id: 39,
        nombre: "AMBER OUD GOLD",
        categoria: "Hombre"
    },

    {
        id: 40,
        nombre: "ONE MILLÓN",
        categoria: "Hombre"
    },

    {
        id: 41,
        nombre: "PARIS HILTON MEN",
        categoria: "Hombre"
    },

    {
        id: 42,
        nombre: "BARARA KING",
        categoria: "Hombre"
    },

    {
        id: 43,
        nombre: "MOSCHINO TOY BOY",
        categoria: "Hombre"
    },

    {
        id: 44,
        nombre: "DIESEL PLUS",
        categoria: "Hombre"
    },

    {
        id: 45,
        nombre: "INVICTUS MEN",
        categoria: "Hombre"
    },

    {
        id: 46,
        nombre: "LIGHT BLUE MEN",
        categoria: "Hombre"
    },

    {
        id: 47,
        nombre: "ARABIANS TONKA",
        categoria: "Hombre"
    },

    {
        id: 48,
        nombre: "ACQUA DI GIO",
        categoria: "Hombre"
    },

    {
        id: 49,
        nombre: "360 RED",
        categoria: "Hombre"
    },

    {
        id: 50,
        nombre: "TOMMY MEN",
        categoria: "Hombre"
    },

    {
        id: 51,
        nombre: "ALLURE SPORT MEN",
        categoria: "Hombre"
    },

    {
        id: 52,
        nombre: "212 VIP MEN",
        categoria: "Hombre"
    },

    {
        id: 53,
        nombre: "LACOSTE RED MEN",
        categoria: "Hombre"
    },

    {
        id: 54,
        nombre: "AVENTURE",
        categoria: "Hombre"
    },

    {
        id: 55,
        nombre: "SOLO LOEWE",
        categoria: "Hombre"
    },

    {
        id: 56,
        nombre: "INVICTUS HUGO BOSS",
        categoria: "Hombre"
    },

    {
        id: 57,
        nombre: "SAUVAGE MEN",
        categoria: "Hombre"
    },

    {
        id: 58,
        nombre: "212 MEN",
        categoria: "Hombre"
    },

    {
        id: 59,
        nombre: "ISSEY MIYAKE",
        categoria: "Hombre"
    },

    {
        id: 60,
        nombre: "SANTAL 33",
        categoria: "Hombre"
    },

    {
        id: 61,
        nombre: "DORSAY MEN",
        categoria: "Hombre"
    },

    {
        id: 62,
        nombre: "VALENTINO UOMO",
        categoria: "Hombre"
    },

    {
        id: 63,
        nombre: "K DOLCE Y GABBANA",
        categoria: "Hombre"
    },

    {
        id: 64,
        nombre: "LACOSTE WHITE",
        categoria: "Hombre"
    },

    {
        id: 65,
        nombre: "FAHRENHEIT",
        categoria: "Hombre"
    },

    {
        id: 66,
        nombre: "VERSACE EROS",
        categoria: "Hombre"
    },

    {
        id: 67,
        nombre: "VERSACE EROS FLAME",
        categoria: "Hombre"
    },

    {
        id: 68,
        nombre: "ANGEL",
        categoria: "Hombre"
    },

    {
        id: 69,
        nombre: "CH MEN",
        categoria: "Hombre"
    },

    {
        id: 70,
        nombre: "CLUB DE NUIT",
        categoria: "Hombre"
    },

    {
        id: 71,
        nombre: "ALLURE CHANEL",
        categoria: "Hombre"
    },

    {
        id: 72,
        nombre: "NAUTICA VOYAGE",
        categoria: "Hombre"
    },

    {
        id: 73,
        nombre: "STORGER WITH YOU",
        categoria: "Hombre"
    },

    {
        id: 74,
        nombre: "CR7",
        categoria: "Hombre"
    },

    {
        id: 75,
        nombre: "LAPIDUS",
        categoria: "Hombre"
    },

    {
        id: 76,
        nombre: "HUGO BOSS",
        categoria: "Hombre"
    },

    {
        id: 77,
        nombre: "NÁUTICA",
        categoria: "Hombre"
    },

    {
        id: 78,
        nombre: "AMALTHE",
        categoria: "Hombre"
    },

    {
        id: 79,
        nombre: "9 PM",
        categoria: "Hombre"
    },

    {
        id: 80,
        nombre: "PHANTOM",
        categoria: "Hombre"
    },

    {
        id: 81,
        nombre: "INSURRECTION",
        categoria: "Hombre"
    },

    {
        id: 82,
        nombre: "DOLCE & GABBANA",
        categoria: "Hombre"
    },

    {
        id: 83,
        nombre: "NOIR EXTREME",
        categoria: "Hombre"
    },

    {
        id: 84,
        nombre: "CALVIN KLEIN ONE",
        categoria: "Hombre"
    },

    {
        id: 85,
        nombre: "KHANRA",
        categoria: "Hombre"
    },

    {
        id: 86,
        nombre: "BAD BOY",
        categoria: "Hombre"
    },

    {
        id: 87,
        nombre: "VALENTINO UOMO BORN IN ROMA",
        categoria: "Hombre"
    },

    {
        id: 88,
        nombre: "HOMBRE NOMADA",
        categoria: "Hombre"
    },

    {
        id: 89,
        nombre: "ASAD BORBÓN",
        categoria: "Hombre"
    },

    {
        id: 90,
        nombre: "7 LOWEL",
        categoria: "Hombre"
    },

    {
        id: 91,
        nombre: "HAWAS ICE",
        categoria: "Hombre"
    },

    {
        id: 92,
        nombre: "BADDE OUD FOR GLORY",
        categoria: "Hombre"
    },

    {
        id: 93,
        nombre: "NEBRAS LATAFA",
        categoria: "Hombre"
    },

    {
        id: 94,
        nombre: "ERBA PURA XERJOFF",
        categoria: "Hombre"
    }

];


// ============================================
// VARIABLES
// ============================================

let carrito = JSON.parse(
    localStorage.getItem("carrito")
) || [];

let categoriaActual = "Todos";

let textoBusqueda = "";


// ============================================
// ELEMENTOS HTML
// ============================================

const listaProductos =
    document.getElementById("listaProductos");

const buscador =
    document.getElementById("buscador");

const cantidadProductos =
    document.getElementById("cantidadProductos");

const fondoCarrito =
    document.getElementById("fondoCarrito");

const listaCarrito =
    document.getElementById("listaCarrito");

const totalCarrito =
    document.getElementById("totalCarrito");

const contadorCarrito =
    document.getElementById("contadorCarrito");

const cantidadCarrito =
    document.getElementById("cantidadCarrito");


// ============================================
// FORMATO DE DINERO
// ============================================

function formatoPrecio(precio) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(precio);

}


// ============================================
// MOSTRAR PRODUCTOS
// ============================================

function mostrarProductos() {

    listaProductos.innerHTML = "";

    const productosFiltrados =
        productos.filter(producto => {

            const coincideCategoria =
                categoriaActual === "Todos" ||
                producto.categoria === categoriaActual;

            const coincideBusqueda =
                producto.nombre
                    .toLowerCase()
                    .includes(
                        textoBusqueda.toLowerCase()
                    );

            return (
                coincideCategoria &&
                coincideBusqueda
            );

        });


    cantidadProductos.textContent =
        `${productosFiltrados.length} productos`;


    if (productosFiltrados.length === 0) {

        listaProductos.innerHTML = `
            <div class="sin-resultados">
                <h3>😕 No encontramos esa esencia</h3>
                <p>Prueba con otro nombre.</p>
            </div>
        `;

        return;
    }


    productosFiltrados.forEach(producto => {

        crearTarjetaProducto(producto);

    });

}


// ============================================
// CREAR TARJETA
// ============================================

function crearTarjetaProducto(producto) {

    const tarjeta =
        document.createElement("article");

    tarjeta.className = "producto";


    let presentacionSeleccionada = 30;

    let precioSeleccionado = 16000;


    tarjeta.innerHTML = `

        <div class="producto-imagen">
            🌸
        </div>

        <div class="producto-info">

            <h3>
                ${producto.nombre}
            </h3>

            <p class="categoria">
                ${producto.categoria}
            </p>


            <div class="presentaciones">

                ${presentacionesBase.map(
                    presentacion => `

                    <button
                        class="presentacion ${
                            presentacion.ml === 30
                                ? "seleccionada"
                                : ""
                        }"
                        data-ml="${presentacion.ml}"
                        data-precio="${presentacion.precio}"
                    >

                        ${presentacion.ml} ml

                    </button>

                `
                ).join("")}

            </div>


            <div
                class="precio"
                data-precio-visible
            >

                ${formatoPrecio(precioSeleccionado)}

            </div>


            <button
                class="boton-agregar"
            >

                🛒 Agregar al carrito

            </button>

        </div>
    `;


    // BOTONES DE PRESENTACIÓN

    const botonesPresentacion =
        tarjeta.querySelectorAll(
            ".presentacion"
        );


    botonesPresentacion.forEach(
        boton => {

            boton.addEventListener(
                "click",
                () => {

                    botonesPresentacion
                        .forEach(
                            b =>
                                b.classList.remove(
                                    "seleccionada"
                                )
                        );


                    boton.classList.add(
                        "seleccionada"
                    );


                    presentacionSeleccionada =
                        Number(
                            boton.dataset.ml
                        );


                    precioSeleccionado =
                        Number(
                            boton.dataset.precio
                        );


                    tarjeta.querySelector(
                        "[data-precio-visible]"
                    ).textContent =
                        formatoPrecio(
                            precioSeleccionado
                        );

                }
            );

        }
    );


    // BOTÓN AGREGAR

    const botonAgregar =
        tarjeta.querySelector(
            ".boton-agregar"
        );


    botonAgregar.addEventListener(
        "click",
        () => {

            agregarAlCarrito(
                producto,
                presentacionSeleccionada,
                precioSeleccionado
            );

        }
    );


    listaProductos.appendChild(tarjeta);

}


// ============================================
// AGREGAR AL CARRITO
// ============================================

function agregarAlCarrito(
    producto,
    ml,
    precio
) {

    const existente =
        carrito.find(
            item =>
                item.id === producto.id &&
                item.ml === ml
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            id: producto.id,

            nombre: producto.nombre,

            categoria: producto.categoria,

            ml: ml,

            precio: precio,

            cantidad: 1

        });

    }


    guardarCarrito();

    mostrarCarrito();

    abrirCarrito();

}


// ============================================
// GUARDAR CARRITO
// ============================================

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}


// ============================================
// MOSTRAR CARRITO
// ============================================

function mostrarCarrito() {

    listaCarrito.innerHTML = "";


    if (carrito.length === 0) {

        listaCarrito.innerHTML = `

            <div class="sin-resultados">

                <h3>🛒 Tu carrito está vacío</h3>

                <p>
                    Agrega una esencia para comenzar.
                </p>

            </div>

        `;

    }


    carrito.forEach(
        (item, indice) => {

            const elemento =
                document.createElement("div");

            elemento.className =
                "item-carrito";


            elemento.innerHTML = `

                <div class="item-carrito-top">

                    <div>

                        <h4>
                            ${item.nombre}
                        </h4>

                        <p>
                            ${item.ml} ml
                        </p>

                    </div>

                    <strong>
                        ${formatoPrecio(
                            item.precio *
                            item.cantidad
                        )}
                    </strong>

                </div>


                <div class="item-carrito-bottom">

                    <div class="controles-cantidad">

                        <button
                            data-accion="restar"
                            data-indice="${indice}"
                        >
                            −
                        </button>

                        <strong>
                            ${item.cantidad}
                        </strong>

                        <button
                            data-accion="sumar"
                            data-indice="${indice}"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="eliminar"
                        data-accion="eliminar"
                        data-indice="${indice}"
                    >

                        Eliminar

                    </button>

                </div>

            `;


            listaCarrito.appendChild(
                elemento
            );

        }
    );


    actualizarTotales();

}


// ============================================
// EVENTOS DEL CARRITO
// ============================================

listaCarrito.addEventListener(
    "click",
    evento => {

        const boton =
            evento.target.closest("button");


        if (!boton) return;


        const accion =
            boton.dataset.accion;

        const indice =
            Number(boton.dataset.indice);


        if (accion === "sumar") {

            carrito[indice].cantidad++;

        }


        if (accion === "restar") {

            carrito[indice].cantidad--;

            if (
                carrito[indice].cantidad <= 0
            ) {

                carrito.splice(indice, 1);

            }

        }


        if (accion === "eliminar") {

            carrito.splice(indice, 1);

        }


        guardarCarrito();

        mostrarCarrito();

    }
);


// ============================================
// ACTUALIZAR TOTALES
// ============================================

function actualizarTotales() {

    let total = 0;

    let cantidad = 0;


    carrito.forEach(item => {

        total +=
            item.precio *
            item.cantidad;

        cantidad +=
            item.cantidad;

    });


    totalCarrito.textContent =
        formatoPrecio(total);


    contadorCarrito.textContent =
        cantidad;


    cantidadCarrito.textContent =
        `${cantidad} producto${
            cantidad !== 1 ? "s" : ""
        }`;

}


// ============================================
// ABRIR CARRITO
// ============================================

function abrirCarrito() {

    fondoCarrito.classList.remove(
        "oculto"
    );

}


// ============================================
// CERRAR CARRITO
// ============================================

function cerrarCarrito() {

    fondoCarrito.classList.add(
        "oculto"
    );

}


document
    .getElementById("botonCarrito")
    .addEventListener(
        "click",
        abrirCarrito
    );


document
    .getElementById("cerrarCarrito")
    .addEventListener(
        "click",
        cerrarCarrito
    );


// ============================================
// VACIAR CARRITO
// ============================================

document
    .getElementById("vaciarCarrito")
    .addEventListener(
        "click",
        () => {

            carrito = [];

            guardarCarrito();

            mostrarCarrito();

        }
    );


// ============================================
// BUSCADOR
// ============================================

buscador.addEventListener(
    "input",
    evento => {

        textoBusqueda =
            evento.target.value;

        mostrarProductos();

    }
);


// ============================================
// FILTROS
// ============================================

const botonesFiltro =
    document.querySelectorAll(
        ".boton-filtro"
    );


botonesFiltro.forEach(
    boton => {

        boton.addEventListener(
            "click",
            () => {

                botonesFiltro.forEach(
                    b =>
                        b.classList.remove(
                            "activo"
                        )
                );


                boton.classList.add(
                    "activo"
                );


                categoriaActual =
                    boton.dataset.categoria;


                mostrarProductos();

            }
        );

    }
);


// ============================================
// WHATSAPP
// ============================================

document
    .getElementById("pedirWhatsApp")
    .addEventListener(
        "click",
        enviarWhatsApp
    );


function enviarWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Tu carrito está vacío."
        );

        return;

    }


    /*
        IMPORTANTE:

        Cambia este número por el número
        de WhatsApp de tu emprendimiento.

        Formato:

        57 + número

        Ejemplo:

        573001234567
    */

    const numeroWhatsApp =
        "573105586821";


    let mensaje =
        "Hola, quiero realizar el siguiente pedido:%0A%0A";


    carrito.forEach(item => {

        mensaje +=
            `• ${item.nombre} - ${item.ml} ml x ${item.cantidad} = ${formatoPrecio(
                item.precio * item.cantidad
            )}%0A`;

    });


    const total =
        carrito.reduce(
            (suma, item) =>
                suma +
                item.precio *
                item.cantidad,
            0
        );


    mensaje +=
        `%0ATotal: ${formatoPrecio(total)}`;


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;


    window.open(
        url,
        "_blank"
    );

}


// ============================================
// INICIAR CATÁLOGO
// ============================================

mostrarProductos();

mostrarCarrito();
