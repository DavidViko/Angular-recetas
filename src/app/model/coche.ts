export class Coche {
    id: number;
    marca: string;
    modelo: string;
    version: string;
    foto: string;

    //características
    puertas:number;
    caballos: number;
    consumo: number;

    constructor(marca: string, modelo: string, version?: string, foto?:string, id?: number, puertas?:number, caballos?:number,consumo?:number) {//el caracter "?" significa que es un atributo opcional
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = 'assets/imgs/coche_default.jpg';
        }   
         
        this.id = id;
        this.puertas= puertas;
        this.caballos = caballos;
        this.consumo = consumo ;
    }

}