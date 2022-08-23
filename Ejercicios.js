function invocarCallback(nombre) {
    // Invoca al callback `cb`
    // Aqui tu codigo
    console.log("El nombre es"+ nombre); 
}
function crearPersona(nombre, cb)
{
     cb(nombre);
}
crearPersona('Gaston', invocarCallback);
crearPersona('Matias', invocarCallback);


function mostrar(aux) {
    
    console.log(aux);
}  

function sumarArray(numeros, cb)
{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    // Aqui tu codigo
    let aux= 0;
    for (let i = 0; i < numeros.length; i++) {
        aux = numeros[i]+aux;
        
    }
    cb(aux)
}


var numeros= [1,2,3,4];
sumarArray(numeros,mostrar);

function muestraArray(asd)
{
    console.log(asd);
}

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    // Aqui tu codigo
    array.forEach(cb);

}  
var numeros= [1,2,3,4];
forEach(numeros,muestraArray);

function sumarArray(elemento)
{
    return elemento
}

function map(array,cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    // Aqui tu codigo
    var nuevoArray = array.map(cb);

    console.log(nuevoArray);
}

var numeros= [1,2,3,4];
map(numeros,sumarArray);
