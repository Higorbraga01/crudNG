import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Setor } from '../setor.model';
import { SetorService } from '../setor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  setor: Setor;
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private setorService: SetorService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(''),
      descricao: this.fb.control('', Validators.required)
    })

    if (this.route.snapshot.params['id']) {
      this.id = this.route.snapshot.params['id'];
      this.setorService.readById(this.id).subscribe((response) => {
        this.setor = response;
        console.log(response);
        this.form.patchValue({
          id: response.id,
          descricao: response.descricao
        })
      })
    }
  }

  reset() {
    this.form.reset();
  }

  save(): void {
    this.setorService.save(this.form.value).subscribe((response) => {
      this.router.navigate(['setor/index'])
    })
  }
}
