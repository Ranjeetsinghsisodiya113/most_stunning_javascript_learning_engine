function printPattern(height) {
    for (let i = 0; i < height; i++) {
        var row = '';
        for (let j = 0; j < height; j++) {
            if (j < height - i - 1) { row += " " }
        }
        for (let k = 0; k < 2*i-1; k++) {

            row +="*"
        }
        console.log(row);
    }
}

printPattern(5)