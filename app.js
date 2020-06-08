"use strict";
(function () {
    function getEdad() {
        return 1 + 2 + 3;
    }
    var nombre = "Luis";
    var apellido = "Mayta";
    var edad = 40;
    // const salida = nombre + " "+ apellido+" ("+edad+")"
    var salida = nombre + " " + apellido + " (" + edad + ") fun: " + getEdad();
    console.log(salida);
})();
