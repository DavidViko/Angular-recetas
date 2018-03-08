import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';
import * as $ from 'jquery';

import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  ingredientes: FormArray;

  constructor(private fb: FormBuilder, private recetasService: RecetasService) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
  }

  crearFormulario(): void {
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({

      // FormControl (input) => ['value',[Validaciones] ]
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cocinero: ['', [Validators.minLength(3)]],
      imagen: ['assets/img/receta-default.jpg', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      gluten: ['false', Validators.required],
      ingredientes: this.fb.array([this.createIngredienteFormGroup()], Validators.required)
    });
  }

  /** 
     * Creamos un FormGroup para los Ingredientes
     * */
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  /** 
   * Evento para crear un nuevo Ingrediente
  */
  clickOtroIngrediente() {
    console.log('FormularioComponent clickOtroIngrediente');
    this.ingredientes.push(this.createIngredienteFormGroup());
  }

  clickEliminarIngrediente(index) {
    console.log('FormularioComponent clickEliminarIngrediente');
    this.ingredientes.removeAt(index);
  }

  submit(): void {
    console.log('FormularioComponent onSubmit');

    let receta = this.mapearFormularioReceta(this.formulario);

    // let receta = new Receta(nombre, cocinero, imagen, descripcion, 0, gluten);
    this.recetasService.crear(receta);

    //limpiar Formulario y poner un solo ingrediente
    this.formulario.reset({
      gluten: "true",
      imagen: "assets/img/receta-default.jpg",
    });
    this.ingredientes.controls.splice(1);

    $('#btn-close').click(); // Para cerrar la modal obliga a hacer click en la X, que tiene asociada la función cerrado
  }

  /**
   * Nos retorna las clases para darle estilos al div
   * @param control 
   */
  estilosInput(control: FormControl): string {
    const CLASS_ERROR = "form-group has-error";
    const CLASS_SUCCESS = "form-group has-success";

    if (control.dirty) {
      return (control.valid) ? CLASS_SUCCESS : CLASS_ERROR;
    } else {
      return "form-group"
    }
  }

  mapearFormularioReceta(form: FormGroup) {
    let receta = new Receta(form.value.nombre);
    receta.nombre = form.value.nombre;
    receta.cocinero = form.value.cocinero;
    receta.isGlutenFree = (form.value.gluten === "true") ? true : false;
    receta.imagen = form.value.imagen;
    receta.descripcion = form.value.descripcion;
    //recuperar los ingredientes
    form.value.ingredientes.map(element => {
      receta.addIngrediente(element.nombre);
    });

    return receta;
  }
}
