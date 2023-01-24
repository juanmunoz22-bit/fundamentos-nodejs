function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (err) {
            callback(err, null);
        }
    });
}

asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err; NO VA A FUNCIONAR PORQUE ESTAMOS EN UNA FUNCIÓN ASÍNCRONA
    }
    console.log('Todo ha ido bien, mi dato es', dato);
})