const draw = (size, type) => {
    for (let i = 0; i < size; i++) {
        switch (type) {
            case "square":
                console.log(lineFigure(size));
                break;

            case "triangle":
                console.log(`${" ".repeat(size - i - 1)} ${lineFigure(i+1)}`);
                break;
        }
    }
}

const lineFigure = (size) => {
    return "* ".repeat(size)
}

draw(4, "square");