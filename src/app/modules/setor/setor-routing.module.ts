import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'add',
    component: IndexComponent,
  },
  {
    path: 'edit/:id',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)]
})
export class SetorRoutingModule { }
