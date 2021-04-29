import { ColaboradorRoutingModule } from './modules/colaborador/colaborador-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'colaborador',
    loadChildren: () =>
      import('./modules/colaborador/colaborador-routing.module').then((m) => m.ColaboradorRoutingModule),
  }
  ,
  {
    path: 'setor',
    loadChildren: () =>
      import('./modules/setor/setor-routing.module').then((m) => m.SetorRoutingModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
