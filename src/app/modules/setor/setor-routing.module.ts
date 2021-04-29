import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'add',
    component: EditComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)]
})
export class SetorRoutingModule { }
