(()=>{
    interface Xmen {
        nombre: string,
        edad: number,
        poder?: string //PAra hacerlo opcion
    }
    const enviarMision = (xmen: Xmen )=>{
        console.log(`Enviando a ${xmen.nombre} a la mision`)
    }
    
    const wolverine: Xmen={
        nombre: 'Loga',
        edad: 60
    }
    enviarMision(wolverine);

})();    
