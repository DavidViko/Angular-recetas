import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Nuestro módulo para routing
import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component;
import { UsuarioComponent } from './usuario/usuario.component'';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponen,
    UsuarioComponentt
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
