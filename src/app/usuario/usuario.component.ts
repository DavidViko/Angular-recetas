import { Component, OnInit } from '@angular/core';
import {Usuario, Sexo} from "../model/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario : Usuario;
  
  constructor() {
    this.usuario = new Usuario('Gollum');

    this.usuario.apellido = "(Sméagol)";
    this.usuario.email = "mitesoro@gollum.com";
    this.usuario.avatar = "http://i0.kym-cdn.com/entries/icons/original/000/019/367/gollum_395_394.jpg";
    this.usuario.sexo = Sexo.MASCULINO;
  }

  ngOnInit() {
  }
}