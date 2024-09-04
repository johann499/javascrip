'use strict'
document.write('<h1>Aguanten las calvas</h1>')

// Tipos de datos
// cadena
;('Como ta muchacos')
;('todo bien')

// Número
10000
;-2.3

// Booleano
true
false

// Objeto
const objeto = {
 nombre: 'Amaya',
 valor1: 99.99,
 valor2: 35,
}

// Variables
var nombre = 'johann'
let apellido = 'rondon'
nombre = 'J.R'
const PI = 3.1415
console.log(nombre)
console.log(apellido)
console.log(PI)

// Estuche de camellos
let nombreUsuario = 'Pablo escobar gabilia'
var lastNameOfPerson = 'el rey de españa'

// Operadores
let NumeroUno = 1
let NumeroDos = 2
let resultado = NumeroUno + NumeroDos
console.log(resultado)

let name = 'Kevin'
let apellido2 = 'Amaya'
let resultt = namee + apellido2
console.log(resultt)

let contraseña = 'Narutoshipuden'
let entrada = 'Narutoshipuden'
let resulttt = entrada === contraseña
console.log(resulttt)

if (resulttt === true) {
 console.log('Inicio de sesión correcto')
} else {
 console.log('Inicio de sesión incorrecto')
}

let puntuacion = 70
if (puntuacion > 30) {
 console.log('Es correcto')
} else {
 console.log('Esta mal')
}

let tipoCard = 'Tarjeta de débito'
switch (tipoCard) {
 case 'Tarjeta de credito':
  console.log('Trakaa')
  break
 case 'Tarjeta de débito':
  console.log('Sí')
  break
 default:
  console.log('¿Qué estás usando?')
  break
}

// Iteradores
let cuenta = 1
while (cuenta < 50) {
 console.log(cuenta)
 cuenta++
}

let nombres = ['johann', 'Fabian', 'Amaya']
console.log(nombres.length)
for (let i = 0; i < nombres.length; i++) {
 console.log(nombres[i])
}

// Funciones
function saludo() {
 console.log('Hola')
}
saludo()