"use strict";
(function () {
    var avenger = {
        nombre: 'steve',
        clave: 'capitan america',
        poder: 'droga'
    };
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //Destructuracion como argumento
    var extraer = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        console.log(nombre);
        console.log(clave);
    };
    extraer(avenger);
    var avengers = ['thor', 'ironmar', 'spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    var uno = avengers[0], dos = avengers[1], tres = avengers[2];
    var cuatro = avengers[2]; //no me interesa los primeros
    console.log(uno);
    console.log(dos);
    console.log(tres);
    var extraerArray = function (_a) {
        var cinco = _a[0], seis = _a[1], siete = _a[2];
        console.log(cinco);
        console.log(seis);
    };
    extraerArray(avengers);
})();
