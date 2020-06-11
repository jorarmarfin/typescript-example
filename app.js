"use strict";
(() => {
    const retirarDinero = (montoRetirar) => {
        let montoActual = 1000;
        return new Promise((resolve, reject) => {
            if (montoRetirar > montoActual) {
                reject('No hay suficiente dinero');
            }
            else {
                montoActual -= montoRetirar;
                resolve(montoActual);
            }
        });
    };
    retirarDinero(5100)
        .then(montoActual => console.log(`Me queda ${montoActual}`))
        .catch(console.warn);
})();
