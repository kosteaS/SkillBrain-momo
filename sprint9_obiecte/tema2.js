function eliminaProprietate(obiect, proprietate) {
    const nouObiect = {}; 

    for (const cheie of Object.keys(obiect)) {
        if (cheie !== proprietate) {
            nouObiect[cheie] = obiect[cheie];
        }
    }

    return nouObiect; 
}

const obiect1 = { x: 10, y: 20, z: 30 };
const proprietate1 = "y";

const rezultat1 = eliminaProprietate(obiect1, proprietate1);
console.log(rezultat1); 
