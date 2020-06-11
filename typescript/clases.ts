(()=>{
    class Avenger {
        nombre:string;
        equipo?:string;
        constructor(nombre: string, equipo: string) {
            this.nombre = nombre;
            this.equipo = equipo;
        }
    }
    class LigaJ {
        constructor(
            public nombre:string,
            public equipo?:string,
            ) { }
    }
    
    const clarck = new LigaJ('Superman');
    console.log(clarck);

})();    
