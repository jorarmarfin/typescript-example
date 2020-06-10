(()=>{
    
    const avenger = {
        nombre:'steve',
        clave:'capitan america',
        poder:'droga'
    }
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    
    const {nombre,clave,poder}=avenger;
    
    console.log(nombre);
    console.log(clave);
    console.log(poder);
    //Destructuracion como argumento
    const extraer = ({nombre,clave}:any)=>{
        console.log(nombre);
        console.log(clave);
    }

    extraer(avenger);

    const avengers: string[]=['thor','ironmar','spiderman'];
    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);

    const [uno,dos,tres]=avengers;
    const [,,cuatro]=avengers; //no me interesa los primeros
    console.log(uno);
    console.log(dos);
    console.log(tres);
    const extraerArray = ([cinco,seis,siete]:string[])=>{
        console.log(cinco);
        console.log(seis);
    }
    extraerArray(avengers);
})();    
