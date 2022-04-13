function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 

let hora = Number(time.slice(0,2))

if (hora>12 || Number(time.slice(3,5))>=60 || Number(time.slice(6,8))>=60 || time == "" || time.length!==10) {return false}

if (time.slice(8,10) === 'AM' && hora===12){
    return '0'+(hora-12)+':'+time.slice(3,5)+':'+time.slice(6,8)
}

if (time.slice(8,10) === 'AM' && hora<12 && hora>=0) {
    return time.slice(0,2)+':'+time.slice(3,5)+':'+time.slice(6,8)
}

if (time.slice(8,10) === 'PM' && hora===12) {
    return time.slice(0,2)+':'+time.slice(3,5)+':'+time.slice(6,8)
}

if (time.slice(8,10) === 'PM' && hora<12 && hora>=0) {
    return hora+12+':'+time.slice(3,5)+':'+time.slice(6,8)
}


/*

let hora = Number(time.slice(0,2))return (hora>12 || Number(time.slice(3,5))>=60 || Number(time.slice(6,8))>=60 || time === "" || time.length!==10) ? false 
   : (time.slice(8,10) === 'AM' && hora===12) ? ('0'+(hora-12)+':'+time.slice(3,5)+':'+time.slice(6,8))
   : (time.slice(8,10) === 'AM' && hora<12 && hora>=0) ? (time.slice(0,2)+':'+time.slice(3,5)+':'+time.slice(6,8))
   : (time.slice(8,10) === 'PM' && hora===12) ? (time.slice(0,2)+':'+time.slice(3,5)+':'+time.slice(6,8))
   : (time.slice(8,10) === 'PM' && hora<12 && hora>=0) ? (hora+12+':'+time.slice(3,5)+':'+time.slice(6,8))
   : false;

*/

}

module.exports = {
    timeConversion
}