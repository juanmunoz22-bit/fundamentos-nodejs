function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 2000);
}

function hablar(nombre, callbackHablar) {
    setTimeout(function () {
        console.log(nombre, 'Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(nombre, function () {
        });
        conversacion(nombre, --veces, callback)
    } else {
        adios(nombre, callback);
    }
}

// --
console.log('Iniciando proceso...');
hola('Juan', function (nombre) {
    conversacion(nombre, 3, function () {
        console.log('Proceso terminado');
    });
});




// hola('Juan', function (nombre) {
//     adios(nombre, function () {
//         console.log('Terminando proceso...');
//     });
// });
//     hablar(nombre, function() {
//         hablar(nombre, function() {
//             adios(nombre, function() {
//                 console.log('Terminando proceso...');
//             });
//         });
//     });
// });

// hola('Juan', function () {

// });
// adios('Juan', function () {

// });