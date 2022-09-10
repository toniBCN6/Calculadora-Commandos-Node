const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    description: 'Base de la tabla de multiplicar',
                    demandOption: true
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: 'true',
                    description: 'Hasta que numero multiplica la base',
                    default: 10
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;