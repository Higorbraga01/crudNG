import { SetorService } from './../../setor/setor.service';
import { Setor } from './../../setor/setor.model';
import { ColaboradorService } from './../colaborador.service';
import { Colaborador } from './../colaborador.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  colaborador: Colaborador;
  setores: Setor[];
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private setorService: SetorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(''),
      cpf: this.fb.control('', Validators.required),
      nome: this.fb.control('', Validators.required),
      email: this.fb.control('', [Validators.email, Validators.required]),
      dataNascimento: this.fb.control(null, Validators.required),
      setor: this.fb.control('', Validators.required),
      telefone: this.fb.control('', Validators.required)
    })

    if (this.route.snapshot.params['id']) {
      this.id = this.route.snapshot.params['id'];
      this.colaboradorService.readById(this.id).subscribe((response) => {
        this.colaborador = response;
        console.log(response);
        this.form.patchValue({
          id: response.id,
          cpf: response.cpf,
          nome: response.nome,
          email: response.email,
          dataNascimento: new Date(response.dataNascimento),
          setor: response.setor,
          telefone: response.telefone
        })
      })
      this.setorService.read().subscribe((setores) => {
        this.setores = setores;
      })
    }
  }

  searchArea(event: any): void {
    // this.subs$.push(
    //   this.colaboradorService.findAllArea({ sigla: event.query })
    //     .subscribe(response => {
    //       this.area = response.content.map(area => ({
    //         label: area.nome,
    //         title: area.sigla,
    //         value: area
    //       }));
    //     })
    // );
  }
}
