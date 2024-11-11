const addNumber = (...argumente) => {
    return argumente.reduce((suma, numar) => suma + numar, 0);
};
console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));
console.log(addNumber(10, -2, 5));
