function creeazaReteta(titlu, portii, ingrediente) {
    const reteta = {
        titlu: titlu,
        portii: portii,
        ingrediente: ingrediente
    };

    console.log(reteta);

    return reteta; 
}

const titlu = "Pizza";
const portii = 3;
const ingrediente = ["sunca", "cas", "ketchup"];

creeazaReteta(titlu, portii, ingrediente);
