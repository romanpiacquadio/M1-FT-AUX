
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    arrayInvertido = []
    
    for (i=0; i<array.length; i++){
        if (array[i]<10){
            arrayInvertido.unshift(array[i])
        }
    } return arrayInvertido
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    
    for (i in array1){
        for (j in array2) {
            if (array1[i] === array2[j]){
                return array1[i]
            }
        }
    }

    let minimo1 = array1[0]
    let minimo2 = array2[0]
    for (k=1; k<array1.length; k++) {
        if (array1[k]<array1[k-1]) {
            minimo1 = array[k]
        }
    }

    for (l=1; l<array2.length; l++) {
        if (array2[l]<array2[l-1]) {
            minimo2 = array[l]
        }
    }
    
    if (minimo1<minimo2) {
        return minimo1
    } else {return minimo2}
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    arrayVacio = []
    for (i in array)  {
        let suma = 0;

        if (typeof(array[i]) === 'object') {
            for (j in array[i]){
            suma = suma + array[i][j]    
            } 
        } else {suma = array[i]}

        arrayVacio.push(suma)
    }

    return arrayVacio;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    arrayElementos = []
    
    if (numero%divisor === 0){
        for (i=0; i<divisor; i++){
            arrayElementos.push(numero/divisor)
        }   return arrayElementos 
    } else {
        return false
    }
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    arrayMinMax = []
    numMin = array[0]
    numMax = array[0]
    for (i=1; i<array.length; i++){
        if (array[i]<array[i-1]){
            numMin = array[i]
        }
        if (array[i]>array[i-1]){
            numMax = array[i]
        }
    }
    arrayMinMax.push(numMin);
    arrayMinMax.push(numMax);
    return arrayMinMax;
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};