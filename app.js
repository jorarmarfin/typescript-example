"use strict";
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
    var numero = 1;
    var letra = 'abc';
    var booleano = true;
    var hoy = new Date();
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
})();
