const dateDif = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if (isNaN(date1) || isNaN(date2)) {
        throw ("Error on date")
    }

    const difference = (date1.getTime() - date2.getTime());
    return Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));
}

try {
    console.log(dateDif("10/12/1995", "12/12/1994"))
} catch {
    console.log("Fecha inválida");
};