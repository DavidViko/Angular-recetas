import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importacion componentes
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '',             component: HomeComponent },   
    { path: 'home',         component: HomeComponent },  
    { path: 'receta',       component: RecetaComponent },
    { path: 'propiedades',  component: PropiedadesComponent },
    { path: '**',           component: Page404Component } 
  ];

export const AppRoutes = RouterModule.forRoot(appRoutes);