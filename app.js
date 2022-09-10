

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear()


// const base = 5;

crearArchivo( argv.b, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( error => console.log(error))





