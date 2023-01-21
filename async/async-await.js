async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 2000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(nombre, 'Bla bla bla bla...');
            resolve(nombre);
            //reject('Hay un error');
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios, ' + nombre);
        resolve();
        }, 1800);
    });

}

async function main() {
    let nombre = await hola('Juan');
    await hablar(nombre);
    await hablar(nombre);
    await hablar(nombre);
    await adios(nombre);
    console.log('Terminado el proceso')
}

console.log('Empezamos el proceso')
main();
console.log('Va a ser la segunda instrucción')