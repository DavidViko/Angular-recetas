/* Clase para encapsular los atributos de una receta */

export class Receta {
    nombre: string;
    imagen:string;
    descripcion: string;
    cocinero:string;
    likes: number;
    isGlutenFree: boolean;
    ingredientes: string[];

    constructor(nombre: string, cocinero: string = "Anonimo") {
        console.log("Receta constructor");
        this.nombre = nombre;
        this.imagen= "assets/img/receta-default.jpg";
        this.descripcion= "";
        this.cocinero= cocinero;
        this.likes= 0;
        this.isGlutenFree= false;
        this.ingredientes= [];
    }

    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente);
    }
}