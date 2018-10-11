const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${base} no es un número`)
            return;
        }

        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número`)
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else{
                resolve(`tabla-${base}-hasta-${limite}.txt`)
            }
        });
    })
}

let listarTabla = (base,limite) => {
    return new Promise( (resolve, reject) => {

        let data = colors.green('======================\n');
        data += colors.blue(`==== Tabla del ${base} ====\n`);
        data += colors.green('======================\n');
        if (!Number(base)) {
            reject(`La base ${base} no es un número`)
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número`)
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(data);
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}