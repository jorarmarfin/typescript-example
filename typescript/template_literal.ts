(function(){
    function getEdad() {
        return 1+2+3;
    }
    const nombre = "Luis";
    const apellido = "Mayta";
    const edad = 40;
    // const salida = nombre + " "+ apellido+" ("+edad+")"
    const salida = `${nombre} ${apellido} (${edad}) fun: ${getEdad()}`
    console.log(salida);

})();    
