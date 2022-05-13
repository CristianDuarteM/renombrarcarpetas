const fs = require('fs');
const colors = require("colors");

let rutaArchivo = "C:/Users/UsuarioGastro/Downloads/Documentos/Gastrocompartida/GastroQuirurgica/CALIDAD/CALIDAD 2019";
let rutasExcedidas = [];
let rutasArregladas = [];
const pathviejas = './viejas.json';
const pathnuevas = './nuevas.json';

function verificarRuta(){
    while(rutaArchivo[rutaArchivo.length - 1] === "/"){
        rutaArchivo = rutaArchivo.substring(0, rutaArchivo.length-1);
        console.log(rutaArchivo);
    }
}

function listarRutasExcedidas (rutaArchivo, p = 0) {
    const stats = fs.lstatSync(rutaArchivo);

    if(!stats.isDirectory()){
        if((rutaArchivo.length-61) + 76 >= 260){
            rutasExcedidas.push(rutaArchivo);
            console.log(colors.green(rutaArchivo));
        }
    } else {
        console.log(colors.yellow(p));
        const archivos = fs.readdirSync(rutaArchivo);
        archivos.forEach((archivo) => {
            listarRutasExcedidas(rutaArchivo+"/"+archivo, p++);
        });
    }
}

function quitararchivos(){
    rutasExcedidas.forEach((ruta, i) => {
        ruta = ruta.split("/");
        ruta = ruta.slice(0,-1);
        ruta = ruta.join("/");
        rutasExcedidas[i] = ruta;
    });
}

function renombrarCarpetas(){
    rutasExcedidas.forEach((ruta) => {

        parteseliminadas = 0;

        while(!fs.existsSync(ruta)) {

            console.log(colors.yellow(ruta));
            console.log(colors.red(fs.existsSync(ruta)));

            rutaseparada = ruta.split("/");

            parteseliminadas += rutaseparada[rutaseparada.length - 1].length;
            rutaseparada = rutaseparada.slice(0, -1);
            rutasinreducir = rutaseparada.join("/");

            directorio = rutaseparada[rutaseparada.length-1];

            directorio = directorio.split(" ");

            directorio = directorio.filter((nombre) => nombre.length > 2);

            directorio.forEach((nombre, i) => {
                nombre = nombre.substring(0,3);
                directorio[i] = nombre;
            });

            directorio = directorio.join("");

            rutaseparada[rutaseparada.length-1] = directorio;

            rutaseparada = rutaseparada.join("/");

            ruta = rutaseparada;
            rutasArregladas.push(ruta);
        }

        //probar ir almacenando la cantidad de caracteres de los archivos.

        while(((ruta.length + parteseliminadas) -61 +76) > 260){
            rutaseparada = ruta.split("/");

            parteseliminadas += rutaseparada[rutaseparada.length - 1].length;
            rutaseparada = rutaseparada.slice(0, -1);
            rutasinreducir = rutaseparada.join("/");

            directorio = rutaseparada[rutaseparada.length-1];

            directorio = directorio.split(" ");

            directorio = directorio.filter((nombre) => nombre.length > 2);

            directorio.forEach((nombre, i) => {
                nombre = nombre.substring(0,3);
                directorio[i] = nombre;
            });

            directorio = directorio.join("");

            rutaseparada[rutaseparada.length-1] = directorio;

            rutaseparada = rutaseparada.join("/");

            ruta = rutaseparada;

            rutasArregladas.push(ruta);

            console.log("ruta sin renombrar -> ".magenta, rutasinreducir);
            console.log("ruta con el nuevo nombre -> ".rainbow,rutaseparada);
            
            fs.renameSync(rutasinreducir, rutaseparada);
        }
    });
}

function guardarDB () {
    const payload = {
        rutas: rutasExcedidas
    };

    const payload2 = {
        rutas: rutasArregladas
    };

    fs.writeFileSync(pathviejas, JSON.stringify( payload ) );
    fs.writeFileSync(pathnuevas, JSON.stringify( payload2 ) );

}

verificarRuta();
listarRutasExcedidas(rutaArchivo);
//quitararchivos();
renombrarCarpetas();
guardarDB();
//console.log(rutasExcedidas.length);
//console.log(rutasArregladas.length);

