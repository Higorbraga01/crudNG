import { ColaboradorService } from './../colaborador.service';
import { Colaborador } from './../colaborador.model';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  productDialog: boolean;

  submitted: boolean;

  colaboradores: Colaborador[];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaboradorService.read().subscribe(response => {
      this.colaboradores = response;
    })

  }

  remove(id): void {
    this.colaboradorService.delete(id).subscribe(() => {
      this.colaboradores.map((model, index) => {
        if (id === model.id) {
          this.colaboradores.splice(index, 1);
        }
      });
    });
  }

  deleteColaborador(colaborador: Colaborador) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir o colaborador ' + colaborador.nome + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.colaboradores.filter(val => val.id !== colaborador.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Colaborador Excluido', life: 3000 });
        this.remove(colaborador.id);
      }
    });
  }

}
