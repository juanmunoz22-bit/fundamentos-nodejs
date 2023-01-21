function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 2000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(nombre, 'Bla bla bla bla...');
            //resolve(nombre);
            reject('Hay un error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
    });

}

// --

console.log('Iniciando proceso...');
hola('Juan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(nombre => {
        console.log("Terminado el proceso")
    })
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    })