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
