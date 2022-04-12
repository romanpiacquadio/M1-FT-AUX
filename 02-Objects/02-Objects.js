// Actividad 1
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      this.titulo = titulo;  // crea una propiedad dentro de Libro que se llama titulo y que contiene el valor que le pasaron por parametro
      this.autor = autor;
      this.traducciones = traducciones;
      
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo;
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor;
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      let objeto = {
        idioma:idioma,
        editorial:editorial
      }
      this.traducciones.push(objeto); 

    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      var idiomas = []

      for (var i= 0; i<this.traducciones.length; i++ ){
        idiomas.push(this.traducciones[i].idioma)
      }
      return idiomas
      
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      
      /*
      // let array = [];
      
      // for(let i=0;i<this.traducciones.length;i++){
      //   array.push(this.traducciones[i].idioma)
      // }
      // let array2 = new Set(array)
      // return array2.size
      
      ----------------
      let rta = new Set (this.getTraducciones())
      return rta.size
      ----------------
      */


      let num = 0

      for (let i=0; i<this.traducciones.length; i++){
        if(this.traducciones[i].idioma){
          num = num + 1
        }

      } return num
    }
  }

  return Libro;
}

//Objeto de ejemplo:
// const hogwarts = {
//   staff: {
//     headmaster: {
//       name: "Albus Percival Wulfric Brian Dumbledore",
//     },
//     keeperOfKeys: {
//       name: "Rubeus Hagrid",
//     },
//    potionsMaster: {
//       name: "Severus Snape",
//     },
//   },
// };
const printStaff = function (objeto) {
  // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
  // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
  // el arreglo debe mantener el orden que posee el staff del objeto.
  let array = []
  
  for (let clave in objeto.staff) {
    array.push('The '+ clave + ' is ' + objeto.staff[clave].name)
  }
  return array
  
  /* 
  let arr = Object.getOwnPropertyNames(objeto.staff) 
  let arr2 = Object.values(objeto.staff)
  let arr3 = []
  for(let i=0; i<arr.length;i++){
  arr3.push("The " + arr[i]  + " is " + arr2[i].name)
  }
  return arr3
  */

};

module.exports = { crearClaseLibro, printStaff };
