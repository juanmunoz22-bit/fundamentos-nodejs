console.log('Algo')
console.error('Algo')
console.warn('Algo')

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
];

console.log(tabla);
console.table(tabla);

console.group('Conversación:');
console.log('Hola');
console.group('bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.log('bla bla bla');
console.groupEnd('bla');
console.log('Adios');
console.groupEnd('Conversación:');

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');

