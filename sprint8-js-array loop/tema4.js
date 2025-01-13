function numaraVocale(sir) {
    const vocale = "aeiouAEIOU"; 
    let count = 0; 

    for (let caracter of sir) {
        if (vocale.includes(caracter)) {
            count++; 
        }
    }
    
    return count; 
}


let input1 = "string de test";
console.log(numaraVocale(input1));
