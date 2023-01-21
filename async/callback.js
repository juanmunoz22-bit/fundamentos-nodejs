function hola(nombre, miCallback) {
    console.log('Hola, soy una función asíncrona');
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 2000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
hola('Juan', function () {
    adios('Juan', function() {
        console.log('Terminando proceso...');
    });
});

// hola('Juan', function () {

// });
// adios('Juan', function () {

// });