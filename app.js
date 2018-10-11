const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(module);
//console.log(process.argv);

//let argv2 = process.argv;

/* let param = argv[2];

let base = param.split('=')[1]; */

//console.log(argv.base);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => console.log(`Tabla del ${argv.base} hasta ${argv.limite}\n${resp}`))
            .catch(err => console.log(err))
        break;
    case 'crear': {
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.blue(archivo)}`))
            .catch(err => console.log(err))
        break;
    }
    default:
        console.log('Comando no reconocido');
        break;
}
