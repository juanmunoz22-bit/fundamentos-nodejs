process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})

process.on('exit', () => {
    console.log('El proceso acabo');
});

process.on('uncaughtException', (err, origin) => {
    console.error('Se nos olvido capturar un error');
    console.error(err);
});
//process.on('unhandledRejection');

functionQueNo();