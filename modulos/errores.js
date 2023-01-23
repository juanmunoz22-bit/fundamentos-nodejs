function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try{
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asincrona');
            cb(err);
        }
    });
}

try {
    // serompe();
    seRompeAsincrona(err => console.log(err.message));
} catch (err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err.name, ':', err.message);
    console.error('Pero no pasa nada, lo hemos capturado');
}