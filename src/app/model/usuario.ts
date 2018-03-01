export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    avatar: string;
    sexo:string["Masculino", "Femenino", "Indefinido"];

    constructor(nombre: string) {
        console.log("Usuario constructor");
        this.id = -1;
        this.nombre = nombre;
        this.apellido = "";
        this.email = "";
        this.avatar = "assets/img/avatar.png";
        this.sexo = 
    }
}