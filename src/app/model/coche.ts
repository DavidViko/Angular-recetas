export class Coche {
    id: number;
    marca: string;
    modelo: string;
    version: string;
    foto: string;

    //características
    puertas:number;
    potencia: number;
    consumo: number;

    constructor(marca: string, modelo: string, version?: string) {//el caracter "?" significa que es un atributo opcional
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.foto = 'assets/img/coche-default.jpg';
        
        this.puertas= 0;
        this.potencia = 0;
        this.consumo = 0 ;
    }

}