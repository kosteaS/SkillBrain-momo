const carti = [
    { titlu: "Hobbitul", autor: "J.R.R. Tolkien", esteCitita: true },
    { titlu: "1984", autor: "George Orwell", esteCitita: false },
    { titlu: "Mândrie și prejudecată", autor: "Jane Austen", esteCitita: true },
    { titlu: "Fahrenheit 451", autor: "Ray Bradbury", esteCitita: false }
];

function afiseazaCarti(carti) {
    for (const carte of carti) {
        console.log(`${carte.titlu} de ${carte.autor}`);

        if (carte.esteCitita) {
            console.log(`Ai citit deja “${carte.titlu}” de ${carte.autor}`);
        } else {
            console.log(`Trebuie să citești “${carte.titlu}” de ${carte.autor}`);
        }
    }
}

afiseazaCarti(carti);
