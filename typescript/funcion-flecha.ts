(function(){
    
    const miFuncion = function (a:string) {
        return a.toUpperCase();
    }
    const miFuncionF = (a:string) => a.toUpperCase();
    const sumarN = function(a:number,b:number){
        return a+b;
    }
    const sumarF = (a:number,b:number) => a+b;

    console.log(sumarF(1,2));

    const hulk = {
        nombre: 'hulk',
        smash(){
            console.log(`${this.nombre} smash!!`);
        }
    }
    const hulkF = {
        nombre: 'hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    }

    
})();    
