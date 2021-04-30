import { Colaborador } from './../../colaborador/colaborador.model';
import { ColaboradorService } from './../../colaborador/colaborador.service';
import { SetorService } from './../setor.service';
import { Setor } from './../setor.model';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  setores: Setor[];
  removido = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private setorService: SetorService,
    private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.setorService.read().subscribe(response => {
      this.setores = response;
    })

  }

  deletarColaborador(colaborador: Colaborador) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir o colaborador ' + colaborador.nome + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.colaboradorService.delete(colaborador.id).subscribe(() => {
          this.removido = true;
          this.ngOnInit();
          if (this.removido) {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Colaborador Excluido', life: 3000 });
          }
        });
      }
    });
  }

  deleteSetor(setor: Setor) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir o setor ' + setor.descricao + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.setorService.delete(setor.id).subscribe(() => {
          this.setores.map((model, index) => {
            if (setor.id === model.id) {
              this.setores.splice(index, 1);
              this.removido = true
              this.ngOnInit();
            }
          });
          if (this.removido) {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Setor Excluido', life: 3000 });
          }
        });
      }
    });
  }

}
