import { Colaborador } from './colaborador.model';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  API_URL = "https://backendplenohigorbraga.herokuapp.com/colaboradores";

  constructor(private http: HttpClient) { }

  // showMessage(msg, isError: boolean = false): void {
  //   this.snackBar.open(msg, 'X', {
  //     duration: 3000,
  //     horizontalPosition: "right",
  //     verticalPosition: "top",
  //     panelClass: isError ? ['msg-error'] : ['msg-sucess']
  //   })
  // }

  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.API_URL, colaborador).pipe(
      map((obj) => obj)
    );
  }

  read(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.API_URL).pipe(
      map((obj) => obj)
    );
  }

  readById(id: number): Observable<Colaborador> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Colaborador>(url).pipe(
      map((obj) => obj)
    );
  }

  update(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.API_URL}/${colaborador.id}`;
    return this.http.put<Colaborador>(url, colaborador).pipe(
      map((obj) => obj)
    );
  }

  delete(id: number): Observable<Colaborador> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<Colaborador>(url).pipe(
      map((obj) => obj)
    );

  }

  // errorHandler(e: any): Observable<any> {
  //   this.showMessage('Ocorreu um erro', true);
  //   return EMPTY
  // }
}