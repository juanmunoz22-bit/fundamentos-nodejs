let i = 0;
let interval = setInterval(function() {
    console.log('Hola');
    if (i === 3) {
        clearInterval(interval);
    }
    i++
}, 1000);

setImmediate(function() {
    console.log('Hola inmediato');
});

console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = 'Mi valor';
console.log(miVariable);