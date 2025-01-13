function letterCount(sir, litera) {
     sir = sir.toLowerCase();
    litera = litera.toLowerCase();
    
   let count = 0;
    for (let char of sir) {
        if (char === litera) {
            count++;
        }
    }
    
    return count;
}

console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r"));
