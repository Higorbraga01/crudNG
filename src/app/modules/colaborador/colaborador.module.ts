import { EditComponent } from './edit/edit.component';
import { TableModule } from 'primeng/table';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [IndexComponent, EditComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule
  ]
})
export class ColaboradorModule { }
