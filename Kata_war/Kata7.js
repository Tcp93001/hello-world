// Ejercicios de Kata Coding
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

// todos los console.log son para dar mensajes en la consola, para debug

let datos = prompt("inserta un PIN:");

console.log(typeof datos);

validatePin(datos);


function validatePin(pin) {
    console.log("entrando a validar si es un número");

    var strOnlyNumbers = /[^0-9]/.exec(pin);

    if (strOnlyNumbers !== null) {
        console.log("no es numero");
        return false;
    }

    console.log("entrando a validar si es la longitud correcta");
    console.log(pin.length);

    if (pin.length == 4) {
        console.log("longitud correcta")
        return true;
    } else if (pin.length == 6) {
        console.log("longitud correcta")
        return true;
    } else {
        console.log("mala longitud")
        return false;
    }

};

//el Mejor resultado que encontré fue:

//function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

/// KATA 2   ////
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

let n = 2;
console.log(SeriesSum(n));

function SeriesSum(n)
{
    let datos = 0;
// Esta parte define si la entrada es '0', entonces la salida será '0.00'
    if (n === 0) {
        return datos.toFixed(2);
    }
 //Colocamos 'a' como negativo para que se inicie el algoritmo con un divisor 1 al sumar 3...   
    let a = -2;
    let i = 1;
/// Esto hace que la primera iteración del algoritmo sea 1/1, la segunda 1/4, tercera 1/7, etc.
    while (i <= n) {
        a += 3;
        datos += (1/a);
        i++;
    }
    return datos.toFixed(2);
}

