function getRandom(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

console.log(getRandom(3, 5));
console.log(getRandom(10, 15));
