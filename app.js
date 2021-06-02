
//const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
//const [ , ,arg3 = 'base=5'] = process.argv;
//const [ , base = 5] = arg3.split('=');

//console.log(process.argv);
console.log( argv );

//console.log('base: yargs', argv.base)

//console.log('base: yargs', argv.b)


//const base = 11;

crearArchivo( argv.b, argv.l, argv.h )  
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'correctamente'))
    .catch( error => console.log(error));







