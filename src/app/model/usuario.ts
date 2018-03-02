export enum Sexo {
    MASCULINO = "Masculino" ,
    FEMENINO = "Femenino",
    INDEFINIDO = "Indefinido"
}

export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    avatar: string;
    sexo:Sexo;

    constructor(nombre: string) {
        console.log("Usuario constructor");
        this.id = 1;
        this.nombre = nombre;
        this.apellido = "";
        this.email = "";
        this.avatar = "assets/img/avatar.png";
        this.sexo = Sexo.INDEFINIDO;
    }
}