let levels = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
for (let x = 1; x <= levels; x++) {
    let row = '';
    for (let y = 1; y <= (levels - x); y++) {
    row += ' ';
    }
    for (let z = 1; z <= x; z++) {
    row += '#';
    }
    console.log(row);
}

