let isBlack = true;

document.write('<div class="container">')

for (let i = 0; i < 8; i++) {
    document.write('<div class="radek">')

    for (let j = 0; j < 8; j++) {
        document.write(`<div class="pole ${isBlack ? 'black' : ''}"></div>`)
        isBlack = !isBlack
    }
    isBlack = !isBlack
    document.write('</div>')
}


document.write('</div>')
