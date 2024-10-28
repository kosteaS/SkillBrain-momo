function ziuaSaptamanii(numar) {
    let zi;
    switch (numar) {
        case 1:
            zi = "Luni";
            break;
        case 2:
            zi = "Marți";
            break;
        case 3:
            zi = "Miercuri";
            break;
        case 4:
            zi = "Joi";
            break;
        case 5:
            zi = "Vineri";
            break;
        case 6:
            zi = "Sâmbătă";
            break;
        case 7:
            zi = "Duminică";
            break;
        default:
            zi = "Număr invalid";
    }
    return zi;
}
console.log(ziuaSaptamanii(1));
console.log(ziuaSaptamanii(5));
console.log(ziuaSaptamanii(8)); 

