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

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private setorService: SetorService) { }

  ngOnInit() {
    this.setorService.read().subscribe(response => {
      this.setores = response;
    })

  }

  remove(id): void {
    this.setorService.delete(id).subscribe(() => {
      this.setores.map((model, index) => {
        if (id === model.id) {
          this.setores.splice(index, 1);
          this.ngOnInit();
        }
      });
    });
  }

  deleteSetor(setor: Setor) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir o setor ' + setor.descricao + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.setores.filter(val => val.id !== setor.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Colaborador Excluido', life: 3000 });
        this.remove(setor.id);
      }
    });
  }

}
