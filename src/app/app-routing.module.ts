import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'galeria', loadChildren:'./pages/galeria/galeria.module#GaleriaModule'},
  {path: 'foto', loadChildren:'./pages/foto/foto.module#FotoModule'},
  {path: 'evento', loadChildren:'./pages/evento/evento.module#EventoModule'},
  {path: '', pathMatch: 'full', redirectTo:'/galeria'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
