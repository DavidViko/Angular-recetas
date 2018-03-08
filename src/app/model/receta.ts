/* Clase para encapsular los atributos de una receta */

export class Receta {
    nombre: string;
    imagen: string;
    descripcion: string;
    cocinero: string;
    likes: number;
    isGlutenFree: boolean;
    ingredientes: string[] = [];
    id: number;

    constructor(nombre: string, cocinero: string = "Anonimo", imagen?: string, descripcion?: string, likes?: number, isGlutenFree?: boolean, ingredientes?: string[], id?: number) {
        console.log("Receta constructor");
        this.nombre = nombre;
        if (imagen) {
            this.imagen = imagen;
        } else {
            this.imagen = 'assets/imgs/coche_default.jpg';
        }
        this.descripcion = descripcion;
        this.cocinero = cocinero;
        this.likes = likes;
        this.isGlutenFree = isGlutenFree;
        this.ingredientes = (ingredientes)?ingredientes:[];

        this.id = id;
    }

    addIngrediente(ingrediente: string) {
        this.ingredientes.push(ingrediente);
    }
}