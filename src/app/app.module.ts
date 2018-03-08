import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Nuestro módulo para routing
import { AppRoutes} from './app.routes';

// Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';

//Componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { FormCochesComponent } from './concesionario/listado/form-coches/form-coches.component';

// Pipes
import { RoundPipe } from './pipes/archivo.pipes';
import { FilterCochePipe } from './pipes/filterCoche.pipe';
import { FilterRecetaPipe } from './pipes/filterReceta.pipe';

// Pagina recetas 2
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';
import { FormularioComponent } from './recetario/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterCochePipe,
    FilterRecetaPipe,
    RecetarioComponent,
    RecetaDetalleComponent,
    FormularioComponent,
    FormCochesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CochesService,
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
