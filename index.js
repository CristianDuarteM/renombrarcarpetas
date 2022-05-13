arreglo = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(arreglo.slice(0,-1));

//const fs = require("fs");

//let ruta = "C:/Users/UsuarioGastro/Downloads/lohevueltoacambiarunavezmas/Nueva la p carpeta/qqqqqqweqweqwe";
//const ruta = "C:/Users/UsuarioGastro/Downloads/lohevueltoacambiarunavezmas/Nueva carpeta/lll";

//fs.renameSync(rutaVieja, ruta);


/*function renombrarCarpetas(){
        let j = 1;
        let rutavieja = ruta;
        
        for(let i = 0; i < 2; i++){
            rutaseparada = ruta.split("/");

            if(j > 1){
                rutaseparada = rutaseparada.slice(0,-1);
                rutavieja = rutaseparada.join("/");
            }
            
            nuevonombrecarpeta = rutaseparada[rutaseparada.length - 1];

            nuevonombrecarpeta = nuevonombrecarpeta.split(" ");

            nuevonombrecarpeta = nuevonombrecarpeta.filter((nombre) => nombre.length > 2);

            nuevonombrecarpeta.forEach((nombre, i) => {
                nombre = nombre.substring(0,3);
                nuevonombrecarpeta[i] = nombre;
            });

            nuevonombrecarpeta = nuevonombrecarpeta.join("");

            rutaseparada[rutaseparada.length - 1] = nuevonombrecarpeta;

            rutaseparada = rutaseparada.join("/");

            ruta = rutaseparada;

            console.log("ruta vieja > ",rutavieja);
            console.log("ruta nueva > ",ruta);

            fs.renameSync(rutavieja, ruta);

            //console.log(ruta);
            ++j;
        }
}

renombrarCarpetas();*/

//console.log("rutas: ",__dirname);

/*//recorro mi arreglo de rutas excedidas
    rutasExcedidas.forEach((ruta, k) => {
        let j = 2;
        
        let rutaVieja = ruta;
        do{
            //divido mi ruta por el separador /
            let rutaNueva = ruta.split("/");

            //voy a la penultima posicion del arreglo que seria la carpeta en donde se encuentra el archivo
            // y divido el nombre de mi carpeta en un nuevo arreglo usando como division cada vez que encuentre un espacio en blanco " "
            nombreDir = rutaNueva[rutaNueva.length - j].split(" ");

            //aplico un filtro el cual me quita todas las palabras del nombre que no tengan mas de 2 letras
            nombreDir = nombreDir.filter((nombre) => nombre.length > 2);
            
            
            //recorro el arreglo del nombre de la carpeta y cambio cada posicion del arreglo por las 3 primeras letras de cada palabra del nombre
            nombreDir.forEach((palabra, i) => {
                palabra = palabra.substr(0,3);
                nombreDir[i] = palabra;
            });
            nombreDir = nombreDir.join("");
            rutaNueva[rutaNueva.length -j] = nombreDir;
            rutaNueva = rutaNueva.join("/");
            ruta = rutaNueva;
            fs.renameSync(rutaVieja, rutaNueva);
            j++;
        } while(ruta.length > 260)

        //ya tengo la ruta lista ahora necesito renombrar la carpeta
        rutasArregladas.push(ruta);
        console.log("Esta es la ruta vieja => ", rutaVieja);
        console.log("Esta es la ruta nueva => ", ruta);
        

    });*/