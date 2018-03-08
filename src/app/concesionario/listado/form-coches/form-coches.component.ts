import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import * as $ from 'jquery';
import { CochesService } from '../../../providers/coches.service';
import { Coche } from '../../../model/coche';

@Component({
  selector: 'app-form-coches',
  templateUrl: './form-coches.component.html',
  styleUrls: ['./form-coches.component.scss']
})

export class FormCochesComponent implements OnInit {
  formCoche: FormGroup;

  constructor(private fb: FormBuilder, private cochesService: CochesService) {
    console.log('FormCochesComponent constructor');
    this.crearFormulario();
  }
  ngOnInit() {
  }

  crearFormulario(): void {
    console.log('FormularioComponent crearFormulario');
    this.formCoche = this.fb.group({

      // FormControl (input) => ['value',[Validaciones] ]
      marca: ['', [Validators.required, Validators.minLength(2)]],
      modelo: ['', [Validators.minLength(3)]],
      version: [''],
      imagen: ['assets/img/receta-default.jpg', [Validators.required]],
      puertas: [3,],
      caballos: [100],
      consumo: [7],
    });
  }

  submit(): void {
    console.log('FormularioComponent onSubmit');

    let coche = this.mapearFormularioCoche(this.formCoche);

    // let receta = new Receta(nombre, cocinero, imagen, descripcion, 0, gluten);
    this.cochesService.crear(coche);

    //limpiar Formulario y poner un solo ingrediente
    this.formCoche.reset({
      imagen: "assets/img/coche-default.jpg",
    });

    $('#btn-close').click(); // Para cerrar la modal obliga a hacer click en la X, que tiene asociada la función cerrado
  }

  mapearFormularioCoche(form: FormGroup) {
    let coche = new Coche(form.value.marca, form.value.modelo);
    coche.version = form.value.version;
    coche.foto = form.value.foto;
    coche.puertas = form.value.puertas;
    coche.consumo = form.value.consumo;
    coche.caballos = form.value.caballos;

    return coche;
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


}
