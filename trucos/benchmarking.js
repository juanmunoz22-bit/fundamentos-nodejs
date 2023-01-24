let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma1 = 0;
console.time('bucle2');
for (let j = 0; j < 10000000000; j++) {
    suma1 += 1;
}
console.timeEnd('bucle2');