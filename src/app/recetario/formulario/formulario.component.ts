import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import * as $ from 'jquery';

import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder, private recetasService: RecetasService) {
    console.log("FormularioComponent constructor");
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario(): void {
    console.log("FormularioComponent crearFormulario");
    this.formulario = this.fb.group({
      // FormControl (input) => ['value',[Validaciones] ]

      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cocinero: ['', [Validators.minLength(2)]],
      imagen: ['', [Validators.required]],
      descripcion: ['',[Validators.required,Validators.minLength(10)]],
      gluten: ['false'],
    });
  }


  submit(): void {
    console.log("FormularioComponent onSubmit");

    //TODO recoger datos del formulario
    let nombre = this.formulario.value.nombre;
    let cocinero = this.formulario.value.cocinero;
    let gluten = this.formulario.value.gluten;
    let imagen = this.formulario.value.imagen;
    let descripcion = this.formulario.value.descripcion;

    let receta = new Receta(nombre, cocinero, imagen, descripcion,0,gluten);
    this.recetasService.crear(receta);

    console.log("Gluten tiene:%o",gluten);
    $("#btn-close").click(); // Para cerrar la modal obliga a hacer click en la X, que tiene asociada la función cerrado
  }
}
