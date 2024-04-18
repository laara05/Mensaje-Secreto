const fs = require('fs');

function decodificarMensaje(mensaje) {
    const palabras = mensaje.split(' ');

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].startsWith('(') && palabras[i].endsWith(')')) {
            const palabraInvertida = palabras[i].slice(1, -1).split('').reverse().join('');
            palabras[i] = palabraInvertida;
        }
    }

    return palabras.join(' ');
}


fs.readFile('SECRETO.IN', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo SECRETO.IN:', err);
        return;
    }

  
    const mensajeDecodificado = decodificarMensaje(data);

   
    fs.writeFile('SECRETO.OUT', mensajeDecodificado, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo SECRETO.OUT:', err);
            return;
        }

        console.log('Mensaje decodificado:', mensajeDecodificado);
        alert('Mensaje decodificado: ' + mensajeDecodificado);
    });
});
