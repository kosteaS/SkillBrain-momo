function calculeazaSuma(array) {
    return array.reduce((acc, numar) => acc + numar, 0);
}

let array1 = [1, -5, 20, -34, 16, 29, 36, -4];
console.log(calculeazaSuma(array1)); 

let array2 = [3.45, -2.68, 356, -75.96, 64, 19.28];
console.log(calculeazaSuma(array2)); 