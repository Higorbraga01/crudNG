import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { TableModule } from 'primeng/table';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [IndexComponent, EditComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    TabViewModule,
    AutoCompleteModule,
    CalendarModule,
    InputMaskModule,
    RouterModule,
    ToolbarModule,
  ]
})
export class ColaboradorModule { }
