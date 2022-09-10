const fs = require('fs');

const crearArchivo = async (base = 5, cantidad = 10) => {

    try {
        
        let salida = "";

        for (let i = 1; i <= cantidad; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        fs.writeFileSync(`./output/tabla-${base}.txt`, salida );
    
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}